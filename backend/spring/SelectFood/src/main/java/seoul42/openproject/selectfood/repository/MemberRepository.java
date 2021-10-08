package seoul42.openproject.selectfood.repository;

import seoul42.openproject.selectfood.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    // 좋아하는 음식, 싫어하는 음식 리스트 저장은 어떻게?
    Optional<Member> findById(Long id);
    Optional<Member> findByEmail(String email);
    List<Member> findAll();
}
