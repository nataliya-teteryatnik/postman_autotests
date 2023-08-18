pm.test("Ожидаю, что при создании покемона без имени получаем соответствующую ошибку в message", function() {
    pm.response.json["message"] == "Отсутствует имя покемона(name)";
});

pm.test("Ожидаю статус ответа 200", function() {
    pm.response.to.have.status(200);
});

pm.test("Ожидаю, что ответ придёт быстрее 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Ожидаю, что поле NAME не пустое", function() {
    pm.response.to.have.jsonBody["name"].length > 0;
});
