package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import seoul42.openproject.selectfood.domain.Food;
import seoul42.openproject.selectfood.service.FoodService;

import java.util.List;

@Controller
@RequestMapping("/food")
public class FoodController {

    private final FoodService foodService;

    // DI(의존성 주입) 은 생성자 주입을 추천
    // 필드 주입은 중간에 바꾸지 못함
    // 세터 주입은 public 이어서 중간에 의도치 않게 바꿀 수도 있음
    @Autowired
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping(value = "/detail")
    public String createForm() {
        return "members/createMemberForm";
    }

    @PostMapping(value = "/detail")
    public String create(FoodForm form) {

        Food food = new Food();
        food.setName(form.getName());

        foodService.join(food);

        return "redirect:/";
    }

    @GetMapping(value = "/all")
    public String list(Model model) {
        List<Food> food = foodService.findAllFood();
        model.addAttribute("food", food);
        return "food/foodList";
    }
}
