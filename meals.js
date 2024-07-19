let totalCalories = 0;

function addMeal() {
    const mealInput = document.getElementById('meal');
    const caloriesInput = document.getElementById('calories');
    const meal = mealInput.value.trim();
    const calories = parseInt(caloriesInput.value.trim());

    if (meal && calories && !isNaN(calories)) {
        totalCalories += calories;

        const mealDiv = document.createElement('div');
        mealDiv.textContent = `${meal}: ${calories} calories`;
        document.getElementById('calorieList').appendChild(mealDiv);

        document.getElementById('totalCalories').textContent = totalCalories;
        saveData();

        mealInput.value = '';
        caloriesInput.value = '';

    } else {
        alert('Please enter a valid meal and calorie amount.');
    }
}

function resetMeals() {
    totalCalories = 0;
    document.getElementById('totalCalories').textContent = totalCalories;
    document.getElementById('calorieList').innerHTML = '';
    saveData();
}

function saveData(){
    localStorage.setItem("data",document.getElementById('totalCalories').textContent);
    localStorage.setItem("cal-list",document.getElementById('calorieList').innerHTML)
}
function showData(){
    document.getElementById('totalCalories').textContent= localStorage.getItem("data");
    document.getElementById('calorieList').innerHTML = localStorage.getItem("cal-list");

}
showData();
