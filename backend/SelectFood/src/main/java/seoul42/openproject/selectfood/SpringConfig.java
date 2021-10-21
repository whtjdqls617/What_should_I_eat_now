package seoul42.openproject.selectfood;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import seoul42.openproject.selectfood.repository.FoodRepository;
import seoul42.openproject.selectfood.repository.JpaFoodRepository;

import javax.persistence.EntityManager;
import javax.sql.DataSource;

@Configuration
public class SpringConfig {

    private final EntityManager em;
//    private final DataSource dataSource;

    @Autowired
    public SpringConfig(DataSource dataSource, EntityManager em) {
//        this.dataSource = dataSource;
        this.em = em;
    }

    @Bean
    public FoodRepository foodRepository() {
        return new JpaFoodRepository(em);
    }
}
