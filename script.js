$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();

        // Obter o valor do input
        var task = $('#task-input').val().trim();

        // Verificar se o input não está vazio
        if (task) {
            // Adicionar a tarefa na lista
            $('#task-list').append('<li>' + task + '</li>');

            // Limpar o input
            $('#task-input').val('');
        }
    });

    // Adicionar linha sobre o texto ao clicar na tarefa
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});