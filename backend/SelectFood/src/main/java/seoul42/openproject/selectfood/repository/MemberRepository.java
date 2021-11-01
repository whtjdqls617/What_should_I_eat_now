package seoul42.openproject.selectfood.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seoul42.openproject.selectfood.domain.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByEmail(String email);
}
