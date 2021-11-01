package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.advice.exception.CEmailSigninFailedException;
import seoul42.openproject.selectfood.config.security.JwtTokenProvider;
import seoul42.openproject.selectfood.domain.Member;
import seoul42.openproject.selectfood.dto.common.CommonResult;
import seoul42.openproject.selectfood.dto.common.SingleResult;
import seoul42.openproject.selectfood.dto.member.Login;
import seoul42.openproject.selectfood.dto.member.MemberSignUpDto;
import seoul42.openproject.selectfood.repository.MemberRepository;
import seoul42.openproject.selectfood.service.CommonResponseService;
import seoul42.openproject.selectfood.service.MemberService;

import java.util.Optional;

@Api(tags = {"Sign"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/user")
public class SignController {

    private final JwtTokenProvider jwtTokenProvider;
    private final CommonResponseService responseService;
    private final PasswordEncoder passwordEncoder;
    private final MemberService memberService;
    private final CommonResponseService commonResponseService;
    private final MemberRepository memberRepository;

    @ApiOperation(value = "중복 이메일 체크", notes = "회원 가입 중 이메일 중복 체크")
    @GetMapping("/signup/available-email")
    public CommonResult checkEmail(@RequestParam String email) {
        Optional<Member> member = memberService.validateDuplicateEmail(email);
        if (member.isPresent()) {
            return commonResponseService.getFailResult(-5,"이메일이 존재합니다.");
        }
        return commonResponseService.getSuccessResult();
    }

    @ApiOperation(value = "회원 가입", notes = "사용자의 선호 음식 리스트 내역과 회원정보까지 저장")
    @PostMapping("/signup")
    public CommonResult signUpMember(@RequestBody MemberSignUpDto signUpDto) {
        signUpDto.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        memberService.signUpWithFoods(signUpDto);
        return commonResponseService.getSuccessResult();
    }

    @ApiOperation(value = "로그인", notes = "이메일 회원 로그인을 한다.")
    @PostMapping(value = "/signin")
    public SingleResult<String> signin(@RequestBody Login login) {

        Member member = memberRepository.findByEmail(login.getEmail()).orElseThrow(CEmailSigninFailedException::new);
        if (!passwordEncoder.matches(login.getPassword(), member.getPassword()))
            throw new CEmailSigninFailedException();

        return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(member.getId()), member.getRoles()));
    }
}
