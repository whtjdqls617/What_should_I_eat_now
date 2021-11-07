package seoul42.openproject.selectfood.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seoul42.openproject.selectfood.advice.exception.CEmailExistException;
import seoul42.openproject.selectfood.advice.exception.CFoodNotFoundException;
import seoul42.openproject.selectfood.advice.exception.CUserNotFoundException;
import seoul42.openproject.selectfood.domain.*;
import seoul42.openproject.selectfood.dto.calendar.CalendarDayFoodDto;
import seoul42.openproject.selectfood.dto.member.MemberSignUpDto;
import seoul42.openproject.selectfood.repository.MemberRepository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final FoodService foodService;
    private final LikeFoodService likeFoodService;
    private final DislikeFoodService dislikeFoodService;
    private final CalendarService calendarService;

    @Transactional
    public Member save(Member member)
    {
        return memberRepository.save(member);
    }

    @Transactional
    public void delete(Member member) {
        memberRepository.delete(member);
    }

    @Transactional
    public Long signUpWithFoods(MemberSignUpDto memberInfo) {
        //TODO : 음식이 데이터베이스에 없을 때 EXCEPTION 발생하도록 추가하기
        List<Food> foods1 = foodService.findByNameList(memberInfo.getLikeFoodNames());
        List<LikeFood> likeFoods = new ArrayList<>();
        for (Food food : foods1) {
            likeFoods.add(LikeFood.createLikeFood(food));
        }
        List<Food> foods2 = foodService.findByNameList(memberInfo.getDislikeFoodNames());
        List<DislikeFood> dislikeFoods = new ArrayList<>();
        for (Food food : foods2) {
            dislikeFoods.add(DislikeFood.createDislikeFood(food));
        }
        Member member = Member.createMember(memberInfo, likeFoods, dislikeFoods);
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        memberRepository.findByEmail(member.getEmail())
                // isPresent() 와 혼동 주의
                .ifPresent(m -> {
                    throw new CEmailExistException();
                });
    }

    public Optional<Member> validateDuplicateEmail(String email) {
        return memberRepository.findByEmail(email);
    }

    public List<Member> findAllMembers() {
        return memberRepository.findAll();
    }

    public Optional<Member> findId(Long memberId) {
        return memberRepository.findById(memberId);
    }

    public Optional<Member> findEmail(String email) {
        return memberRepository.findByEmail(email);
    }

    public List<String> getLikeFoods(String email) {
        List<String> foodNames = new ArrayList<>();
        List<LikeFood> likeFoods = memberRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new).getLikeFoods();
        for (LikeFood likeFood :
                likeFoods) {
            foodNames.add(likeFood.getFood().getName());
        }
        return foodNames;
    }

    public List<String> getDisLikeFoods(String email) {
        List<String> foodNames = new ArrayList<>();
        List<DislikeFood> dislikeFoods = memberRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new).getDislikeFoods();
        for (DislikeFood dislikeFood :
                dislikeFoods) {
            foodNames.add(dislikeFood.getFood().getName());
        }
        return foodNames;
    }

    public List<CalendarDayFoodDto> getSelectedFoods(String email) {
        List<CalendarDayFoodDto> foodNames = new ArrayList<>();
        List<SelectedFood> selectedFoods = memberRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new).getSelectedFoods();
        for (SelectedFood selectedFood :
                selectedFoods) {
            foodNames.add(new CalendarDayFoodDto(selectedFood.getFood().getName(), selectedFood.getSelectDate().toString()));
        }
        return foodNames;
    }

    @Transactional
    public void saveSelectedFood(String email, String foodName) {
        Member member = memberRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new);
        Food food = foodService.findByName(foodName).orElseThrow(CFoodNotFoundException::new);
        member.addSelectedFood(new SelectedFood(member, food, LocalDate.now()));
        memberRepository.save(member);
    }

    @Transactional
    public void saveSelectedFoods(String email, List<String> foodNames, String inDate) {
        LocalDate localDate = LocalDate.parse(inDate);
        Member member = memberRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new);
        for (String foodName :
                foodNames) {
            Food food = foodService.findByName(foodName).orElseThrow(CFoodNotFoundException::new);
            member.addSelectedFood(new SelectedFood(member, food, localDate));
        }
        memberRepository.save(member);
    }

    @Transactional
    public void saveLikeFood(String email, List<String> foodNames) {
        Member member = memberRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new);
        for (String foodName :
                foodNames) {
            Food food = foodService.findByName(foodName).orElseThrow(CFoodNotFoundException::new);
            member.addLikeFood(new LikeFood(member, food));
        }
        memberRepository.save(member);
    }

    @Transactional
    public void saveDislikeFood(String email, List<String> foodNames) {
        Member member = memberRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new);
        for (String foodName :
                foodNames) {
            Food food = foodService.findByName(foodName).orElseThrow(CFoodNotFoundException::new);
            member.addDislikeFood(new DislikeFood(member, food));
        }
        memberRepository.save(member);
    }

    @Transactional
    public void deleteSelectedFood(String email, List<String> foodNames, String inDate) {
        Member member = memberRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new);
        for (String foodName:
                foodNames) {
            Food food = foodService.findByName(foodName).orElseThrow(CFoodNotFoundException::new);
            if (member.hasSelectedFood(food.getId(), LocalDate.parse(inDate))) {
                member.getSelectedFoods().removeIf(food1 -> food1.getFood().getName().equals(foodName) &&
                        food1.getSelectDate().equals(LocalDate.parse(inDate)));
                calendarService.deleteSelectedFood(member.getId(), food.getId(), LocalDate.parse(inDate));
            }
        }
        memberRepository.save(member);
    }

    @Transactional
    public void deleteLikeFood(String email, List<String> foodNames) {
        Member member = memberRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new);
        for (String foodName:
                foodNames) {
            Food food = foodService.findByName(foodName).orElseThrow(CFoodNotFoundException::new);
            if (member.hasLikeFood(food.getId())) {
                member.getLikeFoods().removeIf(food1 -> food1.getFood().getName().equals(foodName));
                likeFoodService.deleteLikeFood(member.getId(), food.getId());
            }
        }
        memberRepository.save(member);
    }

    @Transactional
    public void deleteDislikeFood(String email, List<String> foodNames) {
        Member member = memberRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new);
        for (String foodName:
                foodNames) {
            Food food = foodService.findByName(foodName).orElseThrow(CFoodNotFoundException::new);
            if (member.hasDislikeFood(food.getId())) {
                member.getDislikeFoods().removeIf(food1 -> food1.getFood().getName().equals(foodName));
                dislikeFoodService.deleteDislikeFood(member.getId(), food.getId());
            }
        }
        memberRepository.save(member);
    }
}