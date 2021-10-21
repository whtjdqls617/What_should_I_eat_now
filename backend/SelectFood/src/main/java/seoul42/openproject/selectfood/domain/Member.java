package seoul42.openproject.selectfood.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class Member {

    @Id
    @SequenceGenerator(name="seq-gen",sequenceName="MY_SEQ_GEN", initialValue = 10)
    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="seq-gen")
    private Long id;
    private String nickName;
    private String email;
    private String password;
    private String pickedFoodList;
    private String likeFoodList;
    private String dislikeFoodList;
}
