package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.advice.exception.CPasswordAuthFailedException;
import seoul42.openproject.selectfood.advice.exception.CUserNotFoundException;
import seoul42.openproject.selectfood.domain.*;
import seoul42.openproject.selectfood.dto.common.CommonResult;
import seoul42.openproject.selectfood.dto.common.SingleResult;
import seoul42.openproject.selectfood.dto.member.MemberEditDto;
import seoul42.openproject.selectfood.dto.member.MemberEditFoodDto;
import seoul42.openproject.selectfood.service.CommonResponseService;
import seoul42.openproject.selectfood.service.MemberService;

@Api(tags = "member")
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(value = "/user")
public class MemberController {

    private final MemberService memberService;
    private final CommonResponseService commonResponseService;
    private final PasswordEncoder passwordEncoder;

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "회원정보 (email, nickname) 조회", notes = "회원 정보 수정 화면에 출력할 데이터 조회")
    @GetMapping(value = "/info")
    public SingleResult<MemberEditDto> findUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Member member = memberService.findEmail(email).orElseThrow(CUserNotFoundException::new);
        MemberEditDto memberEditDto = new MemberEditDto();
        memberEditDto.setEmail(member.getEmail());
        memberEditDto.setNickName(member.getNickName());
        return commonResponseService.getSingleResult(memberEditDto);
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "닉네임 변경", notes = "회원 정보 수정 화면에서 닉네임 변경")
    @PutMapping(value = "/info/nickname")
    public CommonResult updateNickName(@RequestBody String nickName) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Member member = memberService.findEmail(email).orElseThrow(CUserNotFoundException::new);
        member.setNickName(nickName);
        memberService.save(member);
        return commonResponseService.getSuccessResult();
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "비밀번호 변경", notes = "회원 정보 수정 화면에서 비밀번호 변경")
    @PutMapping("/info/pass")
    public CommonResult updatePassword(@RequestBody MemberEditDto memberEditPass) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Member member = memberService.findEmail(email).orElseThrow(CUserNotFoundException::new);
        if (!passwordEncoder.matches(memberEditPass.getOldPass(), member.getPassword()))
        {
            throw new CPasswordAuthFailedException();
        }
        member.setPassword(passwordEncoder.encode(memberEditPass.getNewPass()));
        memberService.save(member);
        return commonResponseService.getSuccessResult();
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "호불호 음식 리스트 조회", notes = "회원 정보 수정 중 호불호 음식 리스트 조회")
    @GetMapping("/info/food")
    public SingleResult<MemberEditFoodDto> getLikeFood() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        MemberEditFoodDto memberEditFoodDto = new MemberEditFoodDto();
        memberEditFoodDto.setLikeFoodList(memberService.getLikeFoods(email));
        memberEditFoodDto.setDislikeFoodList(memberService.getDisLikeFoods(email));
        return commonResponseService.getSingleResult(memberEditFoodDto);
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "회원 정보 중 호불호 음식 리스트 변경", notes = "회원 정보 수정 중 좋아하는 음식, 싫어하는 음식 리스트 변경")
    @PutMapping("/info/food")
    public CommonResult updateLikeFood(@RequestBody MemberEditFoodDto foodNames) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        memberService.saveLikeFood(email, foodNames.getLikeFood().getAddFoodList());
        memberService.deleteLikeFood(email, foodNames.getLikeFood().getDeleteFoodList());
        memberService.saveDislikeFood(email, foodNames.getDislikeFood().getAddFoodList());
        memberService.deleteDislikeFood(email, foodNames.getDislikeFood().getDeleteFoodList());
        return commonResponseService.getSuccessResult();
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "회원 탈퇴", notes = "회원 정보 삭제")
    @DeleteMapping(value = "/account")
    public CommonResult deleteMember() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Member member = memberService.findEmail(email).orElseThrow(CUserNotFoundException::new);
        memberService.delete(member);
        return commonResponseService.getSuccessResult();
    }
}
