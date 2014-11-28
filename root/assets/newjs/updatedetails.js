    $('#example').dataTable({
        "iDisplayLength": 5
    });

    $('.empdetails').click(function() {
        var employee = [];
        var counter = 0;
        $(this).find("td").each(function() {
            employee[counter++] = $(this).html();
        });
        $.ajax({
            url: 'dashboard/updatedetailsform',
            data: {
                employeeid: employee[0],
            }
        }).done(function(responseText) {
            $("#maincontent").html(responseText);
        });

    });

    function AddNewEmp() {
        $.ajax({
            url: 'dashboard/addemployee',
        }).done(function(responseText) {
            $("#maincontent").html(responseText);
        });

    }
