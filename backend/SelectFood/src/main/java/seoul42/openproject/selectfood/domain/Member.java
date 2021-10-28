package seoul42.openproject.selectfood.domain;


import lombok.Getter;
import lombok.Setter;
import seoul42.openproject.selectfood.dto.member.MemberSignUpDto;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "MEMBER")
public class Member {

    @Id
//    @SequenceGenerator(name="seq-gen",sequenceName="MY_SEQ_GEN", initialValue = 10)
//    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="seq-gen")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long id;

    @Column(name = "NICK_NAME")
    private String nickName;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PASSWORD")
    private String password;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<SelectedFood> selectedFoods = new ArrayList<SelectedFood>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<LikeFood> likeFoods = new ArrayList<LikeFood>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<DislikeFood> dislikeFoods = new ArrayList<DislikeFood>();

    public static Member createMember(MemberSignUpDto memberInfo, List<LikeFood> likeFoods, List<DislikeFood> dislikeFoods) {
        Member member = new Member();
        member.setEmail(memberInfo.getEmail());
        member.setNickName(memberInfo.getNickName());
        member.setPassword(memberInfo.getPassword());
        for (LikeFood likeFood : likeFoods) {
            member.addLikeFood(likeFood);
        }
        for (DislikeFood dislikeFood : dislikeFoods) {
            member.addDislikeFood(dislikeFood);
        }
        return member;
    }

    /* 연관관계 매서드 */
    public void addSelectedFood(SelectedFood selectedFood) {
        selectedFoods.add(selectedFood);
        selectedFood.setMember(this);
    }

    public void addLikeFood(LikeFood likeFood) {
        likeFoods.add(likeFood);
        likeFood.setMember(this);
    }

    public void addDislikeFood(DislikeFood dislikeFood) {
        dislikeFoods.add(dislikeFood);
        dislikeFood.setMember(this);
    }

    /* getter setter */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<SelectedFood> getSelectedFoods() {
        return selectedFoods;
    }

    public void setSelectedFoods(List<SelectedFood> selectedFoods) {
        this.selectedFoods = selectedFoods;
    }

    public List<LikeFood> getLikeFoods() {
        return likeFoods;
    }

    public void setLikeFoods(List<LikeFood> likeFoods) {
        this.likeFoods = likeFoods;
    }

    public List<DislikeFood> getDislikeFoods() {
        return dislikeFoods;
    }

    public void setDislikeFoods(List<DislikeFood> dislikeFoods) {
        this.dislikeFoods = dislikeFoods;
    }
}
