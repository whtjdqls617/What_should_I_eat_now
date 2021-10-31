package seoul42.openproject.selectfood.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class DislikeFood {

    @Id
    @Column(name = "DISLIKE_FOOD_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dislikeFoodId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "FOOD_ID")
    private Food food;

    public static DislikeFood createDislikeFood(Food food) {
        DislikeFood dislikeFood = new DislikeFood();
        dislikeFood.setFood(food);

        return dislikeFood;
    }
}
