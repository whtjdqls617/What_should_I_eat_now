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

    @Column(name = "NAME")
    private String name;

    @Column(name = "TAG")
    private String tag;

    @Column(name = "INGREDIENT")
    private String ingredient;

    @Column(name = "YOUTUBE_URL")
    private String youtubeUrl;

    @OneToMany(mappedBy = "food")
    private List<SelectedFood> selectedFoods = new ArrayList<SelectedFood>();

    @OneToMany(mappedBy = "food")
    private List<LikeFood> likeFoods = new ArrayList<LikeFood>();

    @OneToMany(mappedBy = "food")
    private List<DislikeFood> dislikeFoods = new ArrayList<DislikeFood>();
}
