function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}

document.getElementById("mealForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const diet = document.getElementById("diet").value;
  const goal = document.getElementById("goal").value;

  let mealPlan = "";
  if (diet === "vegetarian" && goal === "weight_loss") {
      mealPlan = "Breakfast: Oatmeal with fruits.\nLunch: Quinoa salad.\nDinner: Lentil soup.";
  } else if (diet === "keto" && goal === "muscle_gain") {
      mealPlan = "Breakfast: Eggs with avocado.\nLunch: Grilled chicken with greens.\nDinner: Salmon with butter sauce.";
  } else {
      mealPlan = "Custom meal plan coming soon!";
  }

  document.getElementById("result").textContent = mealPlan;
  document.getElementById("result").classList.remove("hidden");
});

function calculateBMI() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;
  const bmi = (weight / (height * height)).toFixed(2);
  document.getElementById("bmiResult").textContent = `Your BMI: ${bmi}`;
}
