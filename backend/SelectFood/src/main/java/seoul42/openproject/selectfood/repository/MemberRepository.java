package seoul42.openproject.selectfood.repository;

import seoul42.openproject.selectfood.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    Optional<Member> findById(Long id);
    Optional<Member> findByEmail(String email);
//    Optional<Member> findByNickName(String nickName);
    List<String> findLikeFood(Long id);
    List<Member> findAll();
}
