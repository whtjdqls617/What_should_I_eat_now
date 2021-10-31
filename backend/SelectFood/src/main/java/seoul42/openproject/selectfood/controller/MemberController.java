package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.advice.exception.CEmailExistException;
import seoul42.openproject.selectfood.advice.exception.CUserNotFoundException;
import seoul42.openproject.selectfood.domain.Member;
import seoul42.openproject.selectfood.dto.common.CommonResult;
import seoul42.openproject.selectfood.dto.common.ListResult;
import seoul42.openproject.selectfood.dto.common.SingleResult;
import seoul42.openproject.selectfood.dto.member.MemberEditDto;
import seoul42.openproject.selectfood.dto.member.MemberSignUpDto;
import seoul42.openproject.selectfood.service.CommonResponseService;
import seoul42.openproject.selectfood.service.MemberService;

import java.util.List;
import java.util.Optional;

@Api(tags = "member")
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/user")
public class MemberController {

    private final MemberService memberService;
    private final CommonResponseService commonResponseService;

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping(value = "/info")
    public SingleResult<MemberEditDto> findUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Member member = memberService.findEmail(email).orElseThrow(CUserNotFoundException::new);
        MemberEditDto memberEditDto = new MemberEditDto();
        memberEditDto.setEmail(member.getEmail());
        memberEditDto.setNickName(member.getNickName());
        return commonResponseService.getSingleResult(memberEditDto);
    }
//    @ApiOperation(value = "회원 정보 수정", notes = "회원 정보 수정")
//    @PutMapping("/user/edit")
//    public String editUserInfo(@RequestBody Member member) {
//        memberService.
//        return "ok";
//    }

//     유저 이메일만 받거나 토큰 받으면 될 것 같은데...
//    @ApiOperation(value = "좋아하는 음식 리스트 클라이언트로 보내기", notes = "회원 정보 수정 중 좋아하는 음식 리스트 변경")
//    @GetMapping("/edit/food/like")
//    public ListResult<String> getLikeFood(@RequestParam String email) throws Exception {
//        Optional<Member> memberForLike = memberService.findEmail(email);
//        List<String> likeFoods = memberService.getLikeFoods(memberForLike.orElseThrow(Exception::new).getId());
//        return commonResponseService.getListResult(likeFoods);
//    }
//
//    @ApiOperation(value = "좋아하는 음식 리스트 변경", notes = "회원 정보 수정 중 좋아하는 음식 리스트 변경")
//    @PutMapping("/edit/food/like")
//    public CommonResult editLikeFood(@RequestBody MemberEditDto memberEditDto) {
//        Long memberId = memberService.updateLikeFood(memberEditDto);
//        if (memberId > 0)
//            return commonResponseService.getSuccessResult();
//        return commonResponseService.getFailResult();
//    }
//
//    @ApiOperation(value = "싫어하는 음식 리스트 클라이언트로 보내기", notes = "회원 정보 수정 중 싫어하는 음식 리스트 변경")
//    @GetMapping("/edit/food/dislike")
//    public SingleResult<String> getDislikeFood(@RequestParam String email) throws Exception {
//        Optional<Member> memberForDislike = memberService.findEmail(email);
////        return memberForDislike.get().getDislikeFoodList();
//        return commonResponseService.getSingleResult(memberForDislike.orElseThrow(Exception::new).getDislikeFoodList());
//    }
//
//    @ApiOperation(value = "싫어하는 음식 리스트 변경", notes = "회원 정보 수정 중 싫어하는 음식 리스트 변경")
//    @PutMapping("/edit/food/dislike")
//    public CommonResult editDislikeFood(@RequestBody MemberEditDto memberEditDto) {
//        Long memberId = memberService.updateDislikeFood(memberEditDto);
//        if (memberId > 0)
//            return commonResponseService.getSuccessResult();
//        return commonResponseService.getFailResult();
//    }

//    @ApiOperation(value = "로그인", notes = "임시적인 로그인")
//    @GetMapping("/signin")
//    public String login(@RequestBody Member member) {
//        Optional<Member> dbMember = memberService.findEmail(member.getEmail());
//        if (dbMember.isPresent()) {
//            if (member.getPassword().equals(dbMember.get().getPassword())) {
//                return "ok";
//            }
//        }
//        return "fail";
//    }
}
