package seoul42.openproject.selectfood.repository;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import seoul42.openproject.selectfood.domain.Member;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository
@AllArgsConstructor
public class JpaMemberRepository implements MemberRepository{

    private final EntityManager em;

    @Override
    public Member save(Member member) {
        em.persist((member));
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        Member member = em.find(Member.class, id);
        return Optional.ofNullable(member);
    }

    @Override
    public Optional<Member> findByEmail(String email) {
        List<Member> resultList = em.createQuery("select m from Member m where m.email= :email", Member.class)
                .setParameter("email", email)
                .getResultList();
        return resultList.stream().findAny();
    }

    @Override
    public Optional<Member> findByNickName(String nickName) {
        List<Member> resultList = em.createQuery("select m from Member m where m.nickName= :nickName", Member.class)
                .setParameter("nickName", nickName)
                .getResultList();
        return resultList.stream().findAny();
    }

    @Override
    public List<Member> findAll() {
        return em.createQuery("select m from Member m",Member.class).getResultList();
    }
}
