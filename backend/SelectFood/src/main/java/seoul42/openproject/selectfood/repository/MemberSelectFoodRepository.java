package seoul42.openproject.selectfood.repository;

import seoul42.openproject.selectfood.domain.Food;
import seoul42.openproject.selectfood.domain.Member;
import seoul42.openproject.selectfood.domain.SelectedFood;

import java.util.List;
import java.util.Optional;

public interface MemberSelectFoodRepository {
    void save(Member member, Food food);
    Optional<SelectedFood> findByMemberId(Long memberId);
    Optional<Member> findByEmail(String email);
    List<Member> findAll();
}
