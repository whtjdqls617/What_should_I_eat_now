package seoul42.openproject.selectfood.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import seoul42.openproject.selectfood.domain.PickFood;
import seoul42.openproject.selectfood.domain.PickFoodDto;
import seoul42.openproject.selectfood.domain.Question;

@RequiredArgsConstructor
@Service
public class RecommendApiClient {

    private final RestTemplate restTemplate;
    private String RecommendApiUrl_getPickFood = "http://localhost:8080/rest/pick-food";

    public PickFoodDto requestPickFood(String email, Question question) {

//        HttpHeaders headers = new HttpHeaders()HttpHeaders;
//        headers.set(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
//        headers.set("Django-Client-secret", "testaaa");

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(RecommendApiUrl_getPickFood)
                .queryParam("email", email)
                .queryParam("question1", question.getQuestion1())
                .queryParam("answer1", question.getAnswer1())
                .queryParam("question2", question.getQuestion2())
                .queryParam("answer2", question.getAnswer2())
                .queryParam("question3", question.getQuestion3())
                .queryParam("answer3", question.getAnswer3());

//        final HttpEntity<String> entity = new HttpEntity<>(headers);
//        restTemplate.getForObject(RecommendApiUrl_getPickFood, PickFoodDto.class);
        System.out.println(builder.build().encode().toUriString());
        return restTemplate.getForObject(
                builder.build().encode().toUriString(),
                PickFoodDto.class
        );
//        return restTemplate.exchange(
//                builder.toUriString(),
//                HttpMethod.GET,
//                entity,
//                PickFoodDto.class).getBody();
    }
}
