package seoul42.openproject.selectfood.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class SelectedFood{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long selectedFoodId;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "food_id")
    private Food food;
}
