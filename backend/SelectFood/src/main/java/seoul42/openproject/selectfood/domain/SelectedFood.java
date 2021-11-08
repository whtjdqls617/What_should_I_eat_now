package seoul42.openproject.selectfood.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "SELECTED_FOOD")
@Getter @Setter
public class SelectedFood{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SELECT_FOOD_ID")
    private Long selectedFoodId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "FOOD_ID")
    private Food food;

    @Column(name = "SELECT_DATE", columnDefinition = "DATE")
    private LocalDate selectDate;

    public SelectedFood() {}

    public SelectedFood(Member member, Food food, LocalDate selectDate) {
        this.member = member;
        this.food = food;
        this.selectDate = selectDate;
    }
}
