package seoul42.openproject.selectfood.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class Food {

    @Id @GeneratedValue
    private Long id;
    private String name;
    private String tag;
    private String ingredient;
    private String youtubeUrl;
}
