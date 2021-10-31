//package seoul42.openproject.selectfood.repository;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//import seoul42.openproject.selectfood.domain.Food;
//
//import javax.persistence.EntityManager;
//import java.util.List;
//import java.util.Optional;
//
//@Repository
//public class JpaFoodRepository implements FoodRepository{
//
//    private final EntityManager em;
//
//    @Autowired
//    public JpaFoodRepository(EntityManager em) {
//        this.em = em;
//    }
//
//    @Override
//    public Food save(Food food) {
//        em.persist(food);
//        return food;
//    }
//
//    @Override
//    public Optional<Food> findById(Long id) {
//        Food food = em.find(Food.class, id);
//        return Optional.ofNullable(food);
//    }
//
//    @Override
//    public Optional<Food> findByName(String name) {
//        List<Food> result = em.createQuery("select m from Food m where m.name= :name", Food.class)
//                .setParameter("name", name)
//                .getResultList();
//        return result.stream().findAny();
//    }
//
//    @Override
//    public List<Food> findAll() {
//        return em.createQuery("select m from Food m", Food.class).getResultList();
//    }
//
//}
