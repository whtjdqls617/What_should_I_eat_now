package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.advice.exception.CEmailExistException;
import seoul42.openproject.selectfood.advice.exception.CEmailSigninFailedException;
import seoul42.openproject.selectfood.config.security.JwtTokenProvider;
import seoul42.openproject.selectfood.domain.Member;
import seoul42.openproject.selectfood.dto.common.CommonResult;
import seoul42.openproject.selectfood.dto.common.SingleResult;
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
    @GetMapping("/signup/check-email")
    public CommonResult checkEmail(@RequestParam String email) {
        Optional<Member> member = memberService.validateDuplicateEmail(email);
        if (member.isPresent()) {
            throw new CEmailExistException();
        }
        return commonResponseService.getSuccessResult();
    }

    @ApiOperation(value = "회원 가입", notes = "사용자의 선호 음식 리스트 내역과 회원정보까지 저장")
    @PostMapping("/signup")
    public CommonResult signUpMember(@RequestBody MemberSignUpDto signUpDto) {
        signUpDto.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        // TODO: 데이터베이스에 없는 음식이 들어왔을 때 에러메세지 추가
        memberService.signUpWithFoods(signUpDto);
        return commonResponseService.getSuccessResult();
    }

    @ApiOperation(value = "로그인", notes = "이메일 회원 로그인을 한다.")
    @PostMapping(value = "/signin")
    public SingleResult<String> signin(@ApiParam(value = "이메일", required = true) @RequestParam String email,
                                       @ApiParam(value = "비밀번호", required = true) @RequestParam String password) {

        Member member = memberRepository.findByEmail(email).orElseThrow(CEmailSigninFailedException::new);
        if (!passwordEncoder.matches(password, member.getPassword()))
            throw new CEmailSigninFailedException();

        return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(member.getId()), member.getRoles()));
    }
}
