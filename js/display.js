$(document).ready(function() {
    $(".link").click(function(e) {
        e.preventDefault();

        $(".iframe").attr('src', $(this).attr('href'));
    })
});
