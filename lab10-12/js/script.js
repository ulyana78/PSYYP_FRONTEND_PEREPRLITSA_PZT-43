/**
 * Задание 4
 */
function calculateMath(x, y) {
    try {
        // проверка на корень из отрицательного числа
        if (y < 0) {
            throw new Error("Ошибка: Квадратный корень из отрицательного числа (y < 0)!");
        }

        // проверка на деление на ноль 
        if (7 * Math.pow(x, 2) === 0) {
            throw new Error("Ошибка: Деление на ноль! x не должен быть равен 0.");
        }

        // Вычисление числителя и знаменателя
        let numerator = Math.pow(x, 2) + (18 * y) - Math.sqrt(y);
        let denominator = 7 * Math.pow(x, 2);
        
        let z = numerator / denominator;

        // проверка на корректность числа
        if (!isFinite(z) || isNaN(z)) {
            throw new Error("Ошибка вычислений (некорректный результат)");
        }
        
        return z;
    } catch (e) {
        // вывод ошибки в диалоговое окно alert() 
        alert(e.message);
        return "Ошибка (" + e.message + ")";
    }
}