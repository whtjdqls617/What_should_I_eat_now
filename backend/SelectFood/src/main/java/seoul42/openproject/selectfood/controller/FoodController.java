package seoul42.openproject.selectfood.controller;

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

        foodService.save(food);

        return "redirect:/";
    }

    @GetMapping(value = "/all")
    public String list(Model model) {
        List<Food> food = foodService.findAllFood();
        model.addAttribute("food", food);
        return "food/foodList";
    }
}
