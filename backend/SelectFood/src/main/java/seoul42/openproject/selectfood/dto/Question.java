package seoul42.openproject.selectfood.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor // 디폴트 생성자 만들기
@AllArgsConstructor  // 모든 파라메터를 가진 생성자 만들기
public class Question {
    private String question1;
    private String answer1;
    private String question2;
    private String answer2;
    private String question3;
    private String answer3;
}
