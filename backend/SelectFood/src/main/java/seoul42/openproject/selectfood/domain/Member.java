package seoul42.openproject.selectfood.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nickName;
    private String email;
    private String password;
    private String pickedFood;
    private String likeFood;
    private String dislikeFood;
}
