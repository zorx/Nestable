/**
 * @author ramondonnell
 * @since 13/05/13
 */

$.fn.exists = function () {
    return this.length !== 0;
};

$(function(){
    $('#nestable').nestable({
        scroll: true
    });

    $('#nestable').on('change', function(e, details){
        $('#changed').text('moved:' + details.sourceId + ', parent:' + details.destParentId + ', above:' + details.prevSiblingId);
    });

    var idStart = 13;

    $('#add').click(function(){
        $('#nestable ol:first-child')
                .append($('<li>').attr('class', 'dd-item').attr('data-id', idStart)
                        .append($('<div>').attr('class', 'dd-handle')
                            .append('Hello ' + idStart)
            ));
        idStart++;
    });
});