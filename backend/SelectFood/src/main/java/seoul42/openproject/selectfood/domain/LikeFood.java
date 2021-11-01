package seoul42.openproject.selectfood.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "LIKE_FOOD")
@Getter @Setter
public class LikeFood {

    @Id
    @Column(name = "LIKE_FOOD_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeFoodId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FOOD_ID")
    private Food food;

    public LikeFood() {
    }

    public LikeFood(Member member, Food food) {
        this.member = member;
        this.food = food;
    }

    public static LikeFood createLikeFood(Food food) {
        LikeFood likeFood = new LikeFood();
        likeFood.setFood(food);

        return likeFood;
    }
}
