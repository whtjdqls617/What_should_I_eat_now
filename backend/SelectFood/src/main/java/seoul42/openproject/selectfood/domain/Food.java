package seoul42.openproject.selectfood.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "FOOD")
@Getter @Setter
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FOOD_ID")
    private Long id;

//    @Column(name = "NICK_NAME", nullable = false, length = 100)
    @Column(name = "NAME", nullable = false, unique = true, length = 100)
    private String name;

    @Column(name = "TAG", nullable = false, length = 200)
    private String tag;

    @Column(name = "INGREDIENT", nullable = false, length = 200)
    private String ingredient;

    @Column(name = "YOUTUBE_URL", nullable = false, length = 200)
    private String youtubeUrl;

    @OneToMany(mappedBy = "food")
    private List<SelectedFood> selectedFoods = new ArrayList<SelectedFood>();

    @OneToMany(mappedBy = "food")
    private List<LikeFood> likeFoods = new ArrayList<LikeFood>();

    @OneToMany(mappedBy = "food")
    private List<DislikeFood> dislikeFoods = new ArrayList<DislikeFood>();
}
