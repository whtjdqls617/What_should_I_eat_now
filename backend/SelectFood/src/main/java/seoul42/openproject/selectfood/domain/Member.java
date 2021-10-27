package seoul42.openproject.selectfood.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

    @Id
//    @SequenceGenerator(name="seq-gen",sequenceName="MY_SEQ_GEN", initialValue = 10)
//    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="seq-gen")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long member_id;

    private String nickName;
    private String email;
    private String password;

    @OneToMany(mappedBy = "member")
    private List<SelectedFood> selectedFoods = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<LikeFood> likeFoods = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<DislikeFood> dislikeFoods = new ArrayList<>();

}
