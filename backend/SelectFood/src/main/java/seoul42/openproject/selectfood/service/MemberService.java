package seoul42.openproject.selectfood.service;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seoul42.openproject.selectfood.domain.Food;
import seoul42.openproject.selectfood.domain.Member;
import seoul42.openproject.selectfood.repository.MemberRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    @Transactional
    public Member saveMember(Member member) {
        validateDuplicateMember(member);
        return memberRepository.save(member);
    }

    private void validateDuplicateMember(Member member) {
        memberRepository.findByEmail(member.getEmail())
                // isPresent() 와 혼동 주의
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

    public Optional<Member> validateDuplicateEmail(String email) {
        return memberRepository.findByEmail(email);
    }

    public Optional<Member> validateDuplicateNickName(String nickName) {
        return memberRepository.findByNickName(nickName);
    }

    public List<Member> findAllMembers() {
        return memberRepository.findAll();
    }

    public Optional<Member> findId(Long memberId) {
        return memberRepository.findById(memberId);
    }

    public Optional<Member> findEmail(String email) {
        return memberRepository.findByEmail(email);
    }

//    public Long updatePickedFood(MemberEditDto memberEditDto) {
//        Optional<Member> member = memberRepository.findByEmail(memberEditDto.getEmail());
//        member.ifPresent(member1 -> {
//            member1.setLikeFoodList(member1.getPickedFoodList() + ", " + memberEditDto.getPickedFood());
//            memberRepository.save(member1);
//        });
//        if (member.isPresent())
//            return member.get().getId();
//        return -1L;
//    }
//
//    public Long updateLikeFood(MemberEditDto memberEditDto) {
//        Optional<Member> member = memberRepository.findByEmail(memberEditDto.getEmail());
//        member.ifPresent(member1 -> {
//            member1.setLikeFoodList(member1.getLikeFoodList() + ", " + memberEditDto.getLikeFood());
//            memberRepository.save(member1);
//        });
//        if (member.isPresent())
//            return member.get().getId();
//        return -1L;
//    }
//
//    public Long updateDislikeFood(MemberEditDto memberEditDto) {
//        Optional<Member> member = memberRepository.findByEmail(memberEditDto.getEmail());
//        member.ifPresent(member1 -> {
//            member1.setDislikeFoodList(member1.getDislikeFoodList() + ", " + memberEditDto.getDislikeFood());
//            memberRepository.save(member1);
//        });
//        if (member.isPresent())
//            return member.get().getId();
//        return -1L;
//    }
}
