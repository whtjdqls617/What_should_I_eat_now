package seoul42.openproject.selectfood.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "food_id")
    private Long food_id;

    private String name;
    private String tag;
    private String ingredient;
    private String youtubeUrl;

    @OneToMany(mappedBy = "food")
    private List<SelectedFood> selectedFoods = new ArrayList<>();

    @OneToMany(mappedBy = "food")
    private List<LikeFood> likeFoods = new ArrayList<>();

    @OneToMany(mappedBy = "food")
    private List<DislikeFood> dislikeFoods = new ArrayList<>();
}
