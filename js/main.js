function showMainTable(id) {
    // Скрываем все содержимое
    var mainTables = document.getElementsByClassName('mainTable');
    for (var i = 0; i < mainTables.length; i++) {
        mainTables[i].style.display = 'none';
    }
    
    // Отображаем выбранное содержимое
    var selectMainTable = document.getElementById(id);
    selectMainTable.style.display = 'block';
}