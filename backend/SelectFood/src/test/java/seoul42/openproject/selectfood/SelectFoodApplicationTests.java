package seoul42.openproject.selectfood;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SelectFoodApplicationTests {

    static {
        System.setProperty("spring.config.location", "classpath:/connection.yml,classpath:/application.yml");
    }

    @Test
    void contextLoads() {
    }

}
