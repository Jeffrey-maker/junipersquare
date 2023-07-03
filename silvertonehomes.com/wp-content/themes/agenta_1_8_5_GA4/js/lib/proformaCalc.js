(function($) {

    // console.log('proformaCalc.js');

    // Format commas
    function commaFormat(obj) {
        // console.log('commaFormat');
        var num = obj.value.replace(/,/gi, "");
        var num2 = num.split(/(?=(?:\d{3})+$)/).join(",");
        var num3 = numberWithCommas(num);
        var num4 = num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        var num5 = num4.replace(/^0+/, '');
        obj.value = num5;
    }

    function numberWithCommas(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    function commaSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
            val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
        }
        return val;
    }
    $('form.contact-form-proformaCalc #cost, form.contact-form-proformaCalc #units1, form.contact-form-proformaCalc #pricePerFoot1, form.contact-form-proformaCalc #projectedSF1, ' +
        'form.contact-form-proformaCalc #buildCost1, form.contact-form-proformaCalc #contractorFee1, form.contact-form-proformaCalc #closingCosts1, form.contact-form-proformaCalc #incrementalCost1, ' +
        'form.contact-form-proformaCalc #pricePerFoot2, form.contact-form-proformaCalc #projectedSF2, form.contact-form-proformaCalc #contractorFee2, .contact-form-proformaCalc #closingCosts2, ' +
        'form.contact-form-proformaCalc #incrementalCost2, .contact-form-proformaCalc #loanAmount, .contact-form-proformaCalc #downPayment').off('keyup');
    $('form.contact-form-proformaCalc #cost, form.contact-form-proformaCalc #units1, form.contact-form-proformaCalc #pricePerFoot1, form.contact-form-proformaCalc #projectedSF1, ' +
        'form.contact-form-proformaCalc #buildCost1, form.contact-form-proformaCalc #contractorFee1, form.contact-form-proformaCalc #closingCosts1, form.contact-form-proformaCalc #incrementalCost1, ' +
        'form.contact-form-proformaCalc #pricePerFoot2, form.contact-form-proformaCalc #projectedSF2, form.contact-form-proformaCalc #contractorFee2, .contact-form-proformaCalc #closingCosts2, ' +
        'form.contact-form-proformaCalc #incrementalCost2, .contact-form-proformaCalc #loanAmount, .contact-form-proformaCalc #downPayment').on('keyup', function() {
        var obj = $(this);
        if (obj.value != undefined) {
            var num = obj.value.replace(/,/gi, "");
            var num2 = num.split(/(?=(?:\d{3})+$)/).join(",");
            var num3 = numberWithCommas(num);
            var num4 = num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            var num5 = num4.replace(/^0+/, '');
            obj.value = num5;
        }
    });

    // Format decimals
    function decimalFormat(obj) {
        var num = obj.value.replace(/^0+/, '');
        obj.value = num;
    }
    $('form.contact-form-proformaCalc #iRate').off('keyup');
    $('form.contact-form-proformaCalc #iRate').on('keyup', function(e) {
        decimalFormat($(this));
    });

    /* Add Lot */
    $('form.contact-form-proformaCalc #addLot a').off('click');
    $('form.contact-form-proformaCalc #addLot a').on('click', function(e) {
        e.preventDefault();
        $('#units2').val('1');
        $('#lot2').delay(300).slideDown(500);
        $('#addLot a').delay(300).css({
            'color': '#ccc',
            'pointer-events': 'none'
        });
        $('#pricePerFoot2, #projectedSF2').addClass('required');
        return false;
    });
    /* Calculate Sales Price */
    function calcSalesPrice(fld) {
        var pricePerFoot = $('#pricePerFoot' + fld).val().replace(/,/g, '');
        var projectedSF = $('#projectedSF' + fld).val().replace(/,/g, '');
        if (pricePerFoot != '' && projectedSF != '') {
            var num = pricePerFoot * projectedSF;
            $('#salesPrice1').val(commaSeparateNumber(num));
        } else if (pricePerFoot != '' || projectedSF != '') {
            $('#salesPrice1').val('0');
        }
    }
    $('form.contact-form-proformaCalc #pricePerFoot1, form.contact-form-proformaCalc #projectedSF1').off('input');
    $('form.contact-form-proformaCalc #pricePerFoot1, form.contact-form-proformaCalc #projectedSF1').on('input', function(e) {
        calcSalesPrice(1);
    });
    /*
    $('form.contact-form-proformaCalc #pricePerFoot1, form.contact-form-proformaCalc #projectedSF1').on('input',function(e){
      var pricePerFoot = $('#pricePerFoot1').val().replace(/,/g, '');
      var projectedSF = $('#projectedSF1').val().replace(/,/g, '');
      if (pricePerFoot != '' && projectedSF != '') {
        var num = pricePerFoot * projectedSF;
        $('#salesPrice1').val(commaSeparateNumber(num));
      } else if (pricePerFoot != '' || projectedSF != '') {
        $('#salesPrice1').val('0');
      }
    })
    */
    $('form.contact-form-proformaCalc #pricePerFoot2, form.contact-form-proformaCalc #pricePerFoot2').off('input');
    $('form.contact-form-proformaCalc #pricePerFoot2, form.contact-form-proformaCalc #pricePerFoot2').on('input', function(e) {
        calcSalesPrice(2);
    });
    /*
    $('form.contact-form-proformaCalc #pricePerFoot2, form.contact-form-proformaCalc #projectedSF2').on('input',function(e){
      var pricePerFoot = $('#pricePerFoot2').val().replace(/,/g, '');
      var projectedSF = $('#projectedSF2').val().replace(/,/g, '');
      if (pricePerFoot != '' && projectedSF != '') {
        var num = pricePerFoot * projectedSF;
        $('#salesPrice2').val(commaSeparateNumber(num));
      } else if (pricePerFoot != '' || projectedSF != '') {
        $('#salesPrice2').val('0');
      }
    })
    */

    /* Prepare Loan Calc */
    var cost;
    var loanAmount;
    var downPercent;
    var downPayment;
    var projectedSF1;
    var projectedSF2;
    var buildCost1;
    var buildCost2;
    var units1;
    var units2;
    var contractorFee1;
    var contractorFee2;
    var incrementalCost1;
    var incrementalCost2;

    function prepCalc() {
        // console.log('prepCalc');
        if ($('form.contact-form-proformaCalc #cost').val() == '') {
            cost = 0;
        } else {
            cost = $('#cost').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #downPercent').val() == '') {
            downPercent = 20;
        } else {
            downPercent = $('#downPercent').val();
        }
        if ($('form.contact-form-proformaCalc #downPayment').val() == '') {
            downPayment = 0;
        } else {
            downPayment = $('#downPayment').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #projectedSF1').val() == '') {
            projectedSF1 = 0;
        } else {
            projectedSF1 = $('#projectedSF1').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #projectedSF2').val() == '') {
            projectedSF2 = 0;
        } else {
            projectedSF2 = $('#projectedSF2').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #buildCost1').val() == '') {
            buildCost1 = 0;
        } else {
            buildCost1 = $('#buildCost1').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #buildCost2').val() == '') {
            buildCost2 = 0;
        } else {
            buildCost2 = $('#buildCost2').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #units1').val() == '') {
            units1 = 0;
        } else {
            units1 = $('#units1').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #units2').val() == '') {
            units2 = 0;
        } else {
            units2 = $('#units2').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #contractorFee1').val() == '') {
            contractorFee1 = 0;
        } else {
            contractorFee1 = $('#contractorFee1').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #contractorFee2').val() == '') {
            contractorFee2 = 0;
        } else {
            contractorFee2 = $('#contractorFee2').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #incrementalCost1').val() == '') {
            incrementalCost1 = 0;
        } else {
            incrementalCost1 = $('#incrementalCost1').val().replace(/,/g, '');
        }
        if ($('form.contact-form-proformaCalc #incrementalCost2').val() == '') {
            incrementalCost2 = 0;
        } else {
            incrementalCost2 = $('#incrementalCost2').val().replace(/,/g, '');
        }
    }


    /* Calculate Down */
    function calcDown() {

        prepCalc();

        var constructionCost = (((parseInt(projectedSF1) * parseInt(buildCost1) * parseInt(units1)) + parseInt(contractorFee1) + parseInt(incrementalCost1))) + (((parseInt(projectedSF2) * parseInt(buildCost2) * parseInt(units2)) + parseInt(contractorFee2) + parseInt(incrementalCost2)));
        var downAquisition = constructionCost + parseInt(cost);
        var downConstruction = constructionCost;

        var downMethod;
        if ($('#downAquisition').is(':checked')) {
            downMethod = 'downAquisition';
        } else {
            downMethod = 'downConstruction';
        }

        if (downMethod == 'downAquisition') {
            $('#downPercent').val(downPercent);
            var down = downAquisition * (downPercent / 100)
            $('#downPayment').val(commaSeparateNumber(down));
        } else {
            $('#downPercent').val(downPercent);
            var down = downConstruction * (downPercent / 100)
            $('#downPayment').val(commaSeparateNumber(down));
        }
        calcLoan();
    }
    $('form.contact-form-proformaCalc #cost, .lot-1 input, form.contact-form-proformaCalc .lot-2 input').focusout('input', calcDown);
    $('form.contact-form-proformaCalc #downPercent').off('focusout', calcDown);
    $('form.contact-form-proformaCalc #downPercent').on('focus', calcDown);
    // $('form.contact-form-proformaCalc #cost, .lot-1 input, form.contact-form-proformaCalc .lot-2 input').focusout('input',calcDown);
    // $('form.contact-form-proformaCalc #downPercent').focusout(calcDown);


    /* Calculate Down Percentage */
    function calcPercent() {
        // console.log('calcPercent');
        downPayment = $('form.contact-form-proformaCalc #downPayment').val();
        var downPercent = (downPayment.replace(/,/g, '') / cost.replace(/,/g, '')) * 100;
        $('form.contact-form-proformaCalc #downPercent').val(downPercent.toFixed(2));

        calcLoan();
    }
    $('form.contact-form-proformaCalc #downPayment').focusout(calcPercent);


    /* Calculate Loan Amount */
    function calcLoan() {
        // console.log('calcLoan');
        $('form.contact-form-proformaCalc #loanAmount').val('');
        prepCalc();
        downPercent = parseInt(downPercent);
        downPayment = parseInt(downPayment);
        var improvements = ((parseInt(projectedSF1) * parseInt(buildCost1) * parseInt(units1)) + parseInt(contractorFee1) + parseInt(incrementalCost1)) + ((parseInt(projectedSF2) * parseInt(buildCost2) * parseInt(units2)) + parseInt(contractorFee2) + parseInt(incrementalCost2));
        var loan = (parseInt(cost) + improvements) - downPayment;
        // console.log(improvements)
        // console.log('cost=' + cost)
        // console.log('improvements=' +improvements)
        // console.log('downPayment=' +downPayment)
        // console.log('loan=' + (cost + improvements - downPayment))
        if (downPercent == 0 && downPayment == 0) {
            // console.log('down % and down empty')
        } else if (downPercent == 0 && downPayment != 0) {
            // console.log('down %empty')
        } else if (downPercent != 0 && downPayment == 0) {
            // console.log('down empty')
        } else {
            // console.log('none')
        }
        $('#loanAmount').val(commaSeparateNumber(loan));
    }
    $('form.contact-form-proformaCalc #cost, form.contact-form-proformaCalc .lot-1 input, form.contact-form-proformaCalc .lot-2 input').focusout(calcLoan);
    // Change Down Calculation
    $('form.contact-form-proformaCalc #downAquisition, form.contact-form-proformaCalc #downConstruction').change(calcDown);

    /* Print Calculator */
    function PrintCalculator() {
        // console.log('PrintCalculator');
        var DocumentContainer = document.getElementById('feeCalculator');
        var address = document.getElementById('address');
        var cost = document.getElementById('cost');
        var units1 = document.getElementById('units1');
        var units2 = document.getElementById('units2');
        var pricePerFoot1 = document.getElementById('pricePerFoot1');
        var pricePerFoot2 = document.getElementById('pricePerFoot2');
        var projectedSF1 = document.getElementById('projectedSF1');
        var projectedSF2 = document.getElementById('projectedSF2');
        var salesPrice1 = document.getElementById('salesPrice1');
        var salesPrice2 = document.getElementById('salesPrice2');
        var buildCost1 = document.getElementById('buildCost1');
        var buildCost2 = document.getElementById('buildCost2');
        var contractorFee1 = document.getElementById('contractorFee1');
        var contractorFee2 = document.getElementById('contractorFee2');
        var closingCosts1 = document.getElementById('closingCosts1');
        var closingCosts2 = document.getElementById('closingCosts2');
        var incrementalCost1 = document.getElementById('incrementalCost1');
        var incrementalCost2 = document.getElementById('incrementalCost2');
        var loanAmount = document.getElementById('loanAmount');
        var iRate = document.getElementById('iRate');
        var exitPeriod = document.getElementById('exitPeriod');
        var downPercent = document.getElementById('downPercent');
        var downPayment = document.getElementById('downPayment');

        var WindowObject = window.open("", "PrintWindow",
            "width=800,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes");
        WindowObject.document.writeln('<!DOCTYPE html>');
        WindowObject.document.writeln('<html><head><title>Development Pro Forma</title>');
        var str = "<style type='text/css' media='all'>";
        str = str + "html{width: 600px; max-width: 600px; padding: 15px;} body{font-family: sans-serif;} p{padding: 0 0 5px 0; margin: 0; font-size: 15px;} h4.section-header{border: 1px solid #000; padding: 5px; margin: 1.67em auto; text-align: center;} table.sm{width: 100%;} table.ciu{width: 100%;} tr:nth-child(even){background: #f2f2f2;} table.ciu tr:last-child{font-weight: bold;} tr td:not(:first-child){text-align: right;} tr td:(first-child){text-align: left;}";
        str = str + "</style>";

        var out = "";

        out = out + "<h1>Development Pro Forma</h1>";
        out = out + "<p>Courtesy of Ronnie Lee Booth. For more inofmration, contact Ronnie Lee by email at ronnielee@ronnieleebooth.com or by phone (615) 838-4125. Thanks for visting ronnieleebooth.com!</p>";

        if (address.value != '') {
            out = out + "<h3>" + address.value + "</h3>";
        } else {
            out = out + "<h3></h3>";
        }

        if (cost.value == '') {
            cost = 0;
            out = out + "<p><strong>Acquisition Cost:</strong> $" + cost + "</p>";
        } else {
            out = out + "<p><strong>Acquisition Cost:</strong> $" + cost.value + "</p>";
        }

        out = out + "<h4 class='section-header'>Due Diligence</h4>";
        out = out + "<h4><u>Lot 1</u></h4>";
        out = out + "<table class='sm'><tbody>";

        if (units1.value == '') {
            units1 = 1;
            out = out + "<tr><td><strong>Number of Units:</strong></td><td>" + units1 + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Number of Units:</strong></td><td>" + units1.value + "</td></tr>";
        }

        if (pricePerFoot1.value == '') {
            pricePerFoot1 = 0;
            out = out + "<tr><td><strong>Sales Price Per Foot:</strong></td><td>$" + pricePerFoot1 + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Sales Price Per Foot:</strong></td><td>$" + pricePerFoot1.value + "</td></tr>";
        }

        if (projectedSF1.value == '') {
            projectedSF1 = 0;
            out = out + "<tr><td><strong>Projected S.F.:</strong></td><td>" + projectedSF1 + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Projected S.F.:</strong></td><td>" + projectedSF1.value + "</td></tr>";
        }

        if (salesPrice1.value == '') {
            salesPrice1 = 0;
            out = out + "<tr><td><strong>Sales Price:</strong></td><td>$" + salesPrice1 + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Sales Price:</strong></td><td>$" + salesPrice1.value + "</td></tr>";
        }

        if (buildCost1.value == '') {
            buildCost1 = 0;
            out = out + "<tr><td><strong>Build Cost Per Foot:</strong></td><td>$" + buildCost1 + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Build Cost Per Foot:</strong></td><td>$" + buildCost1.value + "</td></tr>";
        }

        if (contractorFee1.value == '') {
            contractorFee1 = 0;
            out = out + "<tr><td><strong>Contractor Fee:</strong></td><td>$" + contractorFee1 + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Contractor Fee:</strong></td><td>$" + contractorFee1.value + "</td></tr>";
        }

        if (closingCosts1.value == '') {
            closingCosts1 = 0;
            out = out + "<tr><td><strong>Closing Costs:</strong></td><td>$" + closingCosts1 + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Closing Costs:</strong></td><td>$" + closingCosts1.value + "</td></tr>";
        }

        if (incrementalCost1.value == '') {
            incrementalCost1 = 0;
            out = out + "<tr><td><strong>Incremental Costs:</strong></td><td>$" + incrementalCost1 + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Incremental Costs:</strong></td><td>$" + incrementalCost1.value + "</td></tr>";
        }

        out = out + "</tbody></table>";

        if (units2.value != '' && units2.value != 0) {
            out = out + "<h4><u>Lot 2</u></h4>";

            out = out + "<table class='sm'><tbody>";

            if (units2.value == '') {
                units2 = 0;
                out = out + "<tr><td><strong>Number of Units:</strong></td><td>" + units2 + "</td></tr>";
            } else {
                out = out + "<tr><td><strong>Number of Units:</strong></td><td>" + units2.value + "</td></tr>";
            }

            if (pricePerFoot2.value == '') {
                pricePerFoot2 = 0;
                out = out + "<tr><td><strong>Sales Price Per Foot:</strong></td><td>$" + pricePerFoot2 + "</td></tr>";
            } else {
                out = out + "<tr><td><strong>Sales Price Per Foot:</strong></td><td>$" + pricePerFoot2.value + "</td></tr>";
            }

            if (projectedSF2.value == '') {
                projectedSF2 = 0;
                out = out + "<tr><td><strong>Projected S.F.:</strong></td><td>" + projectedSF2 + "</td></tr>";
            } else {
                out = out + "<tr><td><strong>Projected S.F.:</strong></td><td>" + projectedSF2.value + "</td></tr>";
            }

            if (salesPrice2.value == '') {
                salesPrice2 = 0;
                out = out + "<tr><td><strong>Sales Price:</strong></td><td>$" + salesPrice2 + "</td></tr>";
            } else {
                out = out + "<tr><td><strong>Sales Price:</strong></td><td>$" + salesPrice2.value + "</td></tr>";
            }

            if (buildCost2.value == '') {
                buildCost2 = 0;
                out = out + "<tr><td><strong>Build Cost Per Foot:</strong></td><td>$" + buildCost2 + "</td></tr>";
            } else {
                out = out + "<tr><td><strong>Build Cost Per Foot:</strong></td><td>$" + buildCost2.value + "</td></tr>";
            }

            if (contractorFee2.value == '') {
                contractorFee2 = 0;
                out = out + "<tr><td><strong>Contractor Fee:</strong></td><td>$" + contractorFee2 + "</td></tr>";
            } else {
                out = out + "<tr><td><strong>Contractor Fee:</strong></td><td>$" + contractorFee2.value + "</td></tr>";
            }

            if (closingCosts2.value == '') {
                closingCosts2 = 0;
                out = out + "<tr><td><strong>Closing Costs:</strong></td><td>$" + closingCosts2 + "</td></tr>";
            } else {
                out = out + "<tr><td><strong>Closing Costs:</strong></td><td>$" + closingCosts2.value + "</td></tr>";
            }

            if (incrementalCost2.value == '') {
                incrementalCost2 = 0;
                out = out + "<tr><td><strong>Incremental Costs:</strong></td><td>$" + incrementalCost2 + "</td></tr>";
            } else {
                out = out + "<tr><td><strong>Incremental Costs:</strong></td><td>$" + incrementalCost2.value + "</td></tr>";
            }

            out = out + "</tbody><table>";
        }

        out = out + "<h4 class='section-header'>Loan Information</h4>";
        out = out + "<table class='sm'><tbody>";

        if (loanAmount.value == '') {
            loanAmount = 0;
            out = out + "<tr><td><strong>Loan Amount:</strong></td><td>$" + loanAmount + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Loan Amount:</strong></td><td>$" + loanAmount.value + "</td></tr>";
        }

        if (downPercent.value == '') {
            downPercent = 0;
            out = out + "<tr><td><strong>Down Payment (Percentage):</strong></td><td> " + downPercent + "%</td></tr>";
        } else {
            out = out + "<tr><td><strong>Down Payment (Percentage):</strong></td><td> " + downPercent.value + "%</td></tr>";
        }

        if (downPayment.value == '') {
            downPayment = 0;
            out = out + "<tr><td><strong>Down Payment (Amount):</strong></td><td>$" + downPayment + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Down Payment (Amount):</strong></td><td>$" + downPayment.value + "</td></tr>";
        }

        if (iRate.value == '') {
            iRate = 5.5;
            out = out + "<tr><td><strong>Interest Rate:</strong></td><td> " + iRate + "%</td></tr>";
        } else {
            out = out + "<tr><td><strong>Interest Rate:</strong></td><td> " + iRate.value + "%</td></tr>";
        }

        if (exitPeriod.value == '') {
            exitPeriod = 8;
            out = out + "<tr><td><strong>Exit Period (Months):</strong></td><td> " + exitPeriod + "</td></tr>";
        } else {
            out = out + "<tr><td><strong>Exit Period (Months):</strong></td><td> " + exitPeriod.value + "</td></tr>";
        }

        out = out + "</tbody></table><br><br>";
        out = out + "<h2>Pro Forma Estimate</h2>";

        out = out + "<h4 class='result-group'><u>Deal Specific Operating Expenses</u></h4>";
        out = out + "<table class='sm'><tbody>";
        var x = document.getElementById("expenses").getElementsByClassName("result-row");
        var i;
        for (i = 0; i < x.length; i++) {
            var title = x[i].childNodes[0].childNodes[0].data;
            var value = x[i].childNodes[1].childNodes[0].data;
            out = out + "<tr><td><strong>";
            out = out + title;
            out = out + ":</strong></td><td> ";
            out = out + value;
            out = out + "</td></tr>";
        }
        out = out + "</tbody><table>";

        out = out + "<h4 class='result-group'><u>Deal Specific Revenue</u></h4>";
        out = out + "<table class='sm'><tbody>";
        var x = document.getElementById("revenue").getElementsByClassName("result-row");
        var i;
        for (i = 0; i < x.length; i++) {
            var title = x[i].childNodes[0].childNodes[0].data;
            var value = x[i].childNodes[1].childNodes[0].data;
            out = out + "<tr><td><strong>";
            out = out + title;
            out = out + ":</strong></td><td> ";
            out = out + value;
            out = out + "</td></tr>";
        }
        out = out + "</tbody><table>";

        out = out + "<h4 class='result-group'><u>Complex Interest Utilization</u></h4>";
        out = out + "<table class='ciu'><tbody><tr class='heading'>";
        var a = document.getElementById("cap").getElementsByClassName("interest");
        var b = document.getElementById("time").getElementsByClassName("interest");
        var c = document.getElementById("int").getElementsByClassName("interest");
        var y = document.getElementById("interest").getElementsByClassName("col-name");
        var i;
        for (i = 0; i < y.length; i++) {
            var name = y[i].innerText;
            out = out + "<td><strong>";
            out = out + name;
            out = out + "</strong></td>";
        }
        out = out + "</tr>";
        for (i = 0; i < a.length; i++) {
            var cap = a[i].innerText;
            var time = b[i].innerText;
            var int = c[i].innerText;
            out = out + "<tr>";
            out = out + "<td>";
            out = out + cap;
            out = out + "</td>";
            out = out + "<td>";
            out = out + time;
            out = out + "</td>";
            out = out + "<td>";
            out = out + int;
            out = out + "</td>";
            out = out + "</tr>";
        }
        out = out + "</tr></tbody></table>";


        WindowObject.document.writeln(str);
        WindowObject.document.writeln('</head><body>');
        WindowObject.document.writeln(out);
        WindowObject.document.writeln('</body></html>');
        WindowObject.document.close();
        WindowObject.focus();
    }

    // var slug = function(str) {
    function slug(str) {
        var $slug = '';
        var trimmed = $.trim(str);
        $slug = trimmed.replace(/[^a-z0-9-]/gi, '-').
        replace(/-+/g, '-').
        replace(/^-|-$/g, '');
        return $slug.toLowerCase();
    }

    function formatVal(val) {
        finalVal = '$' + val.formatMoney(2);
        return finalVal;
    }

    Number.prototype.formatMoney = function(c, d, t) {
        var n = this,
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    var step = function(now, tween) {
        target = $(tween.elem);
        target.text(formatVal(now));
    }

    function formatResults() {
        $('form.contact-form-proformaCalc #resultsData').prepend('<div class="results-group" id="expenses"><h4>Deal Specific Operating Expenses</h4><div id="expense-results"></div></div><div class="results-group" id="revenue"><h4>Deal Specific Revenue</h4><div id="revenue-results"></div></div><div class="results-group" id="interest"><h4>Complex Interest Utilization</h4><div id="interest-results" class="row"></div><div class="clear"></div></div>')
    }

    function expenseFields(name, title, value) {
        var newField = $('<div class="row result-row" data-field="' + name + '"><div class="col-6 result-title">' + title + '</div><div class="col-6 text-right result-value" id="' + name + '">$' + value + '</div></div>');
        $('form.contact-form-proformaCalc #expense-results').append(newField);
    }

    function revenueFields(name, title, value) {
        var newField = $('<div class="row result-row" data-field="' + name + '"><div class="col-6 result-title">' + title + '</div><div class="col-6 text-right result-value" id="' + name + '">$' + value + '</div></div>');
        $('form.contact-form-proformaCalc #revenue-results').append(newField);
    }

    function interestFields(name, title, value) {
        var newField = $('<div class="result-value interest" id="' + name + '">$' + value + '</div>');
        $('form.contact-form-proformaCalc #interest-results').append(newField);
    }

    function formatInterest() {
        var results = $('form.contact-form-proformaCalc .result-value.interest');
        results.slice(0, 5).wrapAll("<div id ='cap' class='cl col-4'></div>");
        results.slice(5, 10).wrapAll("<div id ='time' class='cl num col-4'></div>");
        results.slice(10, 15).wrapAll("<div id ='int' class='cl col-4'></div>");
        $('form.contact-form-proformaCalc .cl:first-child').prepend('<h5 class="col-name">Cap. Utilization</h5>');
        $('form.contact-form-proformaCalc .cl:nth-child(2)').prepend('<h5 class="col-name">Time <span class="note">(projected)</note></h5>');
        $('form.contact-form-proformaCalc .cl:last-child').prepend('<h5 class="col-name">Interest <span class="note">(projected)</span></h5>');
    }

    function formatNumbers() {
        $('form.contact-form-proformaCalc #projected-roi').text($('#projected-roi').text().replace('$', ''));
        $('form.contact-form-proformaCalc #projected-roi').append('%');
        $('form.contact-form-proformaCalc #projected-roi').text($('#projected-roi').text().replace('$', ''));
        $('form.contact-form-proformaCalc .cl.num .result-value').each(function() {
            var x = $(this).text();
            $(this).text($(this).text().replace('$', ''));
        });
    }

    // Clear errors
    $('form.contact-form-proformaCalc input#cost, form.contact-form-proformaCalc input#pricePerFoot1, form.contact-form-proformaCalc input#projectedSF1').on('input', function() {
        $(this).css({
            'border-color': '#ccc'
        });
        $(this).next('.error').hide(100);
    });


    /* Calculator Submitted */
    // console.log('/* Calculator Submitted */');
    $('form.contact-form-proformaCalc input#calcSubmit').on('click', function(e) {
        e.preventDefault();
        var form = $(this).closest('form');
        // Required fields
        var isValid = false;
        form.find('input.req').each(function() {
            var val = $(this).val();
            if (val == '') {
                $(this).css({
                    'border-color': '#b61612'
                });
                $(this).next('.error').show(100);
                isValid = false;
                return;
            } else {
                isValid = true;
                return isValid;
            }
        });
        if (isValid == true) {

            form.find('input.agenta-button.form-submit').show();
            form.find('#resultsData').html('');
            formatResults();
            // Show results
            form.find('#results').removeClass('hidden');
            form.find('#resultsData').delay(300).slideDown(500);
            //var clear = form.find('#resultsData').html();
            //if(clear != '') { form.find('#resultsData').html(''); }

            var cost = form.find("#cost").val().replace(/,/g, "");
            var units1 = form.find("#units1").val().replace(/,/g, "");
            var units2 = form.find("#units2").val().replace(/,/g, "");
            var pricePerFoot1 = form.find("#pricePerFoot1").val().replace(/,/g, "");
            var pricePerFoot2 = form.find("#pricePerFoot2").val().replace(/,/g, "");
            var projectedSF1 = form.find("#projectedSF1").val().replace(/,/g, "");
            var projectedSF2 = form.find("#projectedSF2").val().replace(/,/g, "");
            var salesPrice1 = form.find("#salesPrice1").val().replace(/,/g, "");
            var salesPrice2 = form.find("#salesPrice2").val().replace(/,/g, "");
            var buildCost1 = form.find("#buildCost1").val().replace(/,/g, "");
            var buildCost2 = form.find("#buildCost2").val().replace(/,/g, "");
            var contractorFee1 = form.find("#contractorFee1").val().replace(/,/g, "");
            var contractorFee2 = form.find("#contractorFee2").val().replace(/,/g, "");
            var closingCosts1 = form.find("#closingCosts1").val().replace(/,/g, "");
            var closingCosts2 = form.find("#closingCosts2").val().replace(/,/g, "");
            var incrementalCost1 = form.find("#incrementalCost1").val().replace(/,/g, "");
            var incrementalCost2 = form.find("#incrementalCost2").val().replace(/,/g, "");
            var loanAmount = form.find("#loanAmount").val().replace(/,/g, "");
            var downPercent = form.find("#downPercent").val().replace(/,/g, "");
            var downPayment = form.find("#downPayment").val().replace(/,/g, "");
            var iRate = form.find("#iRate").val().replace(/,/g, "");
            var exitPeriod = form.find("#exitPeriod").val().replace(/,/g, "");
            var n = $(this).data('n');
            // $.ajax({'url':wpAJX.ajaxurl,'method':'post','dataType':'json','data':formData}).done(function(j) {
            $.ajax({
                // 'url': '/wp-content/themes/agenta/calculators/proforma/calculator.php',
                'url': proformaCalcAJX.ajaxurl,
                'method': 'post',
                'dataType': 'json',
                'type': 'POST',
                // 'crossDomain': true,
                'data': {
                    action: 'proforma',
                    n: n,
                    cost: cost,
                    units1: units1,
                    pricePerFoot1: pricePerFoot1,
                    projectedSF1: projectedSF1,
                    salesPrice1: salesPrice1,
                    buildCost1: buildCost1,
                    contractorFee1: contractorFee1,
                    closingCosts1: closingCosts1,
                    incrementalCost1: incrementalCost1,
                    units2: units2,
                    pricePerFoot2: pricePerFoot2,
                    projectedSF2: projectedSF2,
                    salesPrice2: salesPrice2,
                    buildCost2: buildCost2,
                    contractorFee2: contractorFee2,
                    closingCosts2: closingCosts2,
                    incrementalCost2: incrementalCost2,
                    loanAmount: loanAmount,
                    downPercent: downPercent,
                    downPayment: downPayment,
                    iRate: iRate,
                    exitPeriod: exitPeriod
                }
            }).done(function(responseData) {
                // Slide to formatResults
                setTimeout(function() {
                    var resultsLoc = form.find('#resultsData').offset().top - $('header').height() - 25;
                    $('html, body').animate({
                        scrollTop: resultsLoc
                    }, 1000, "swing");
                }, 501)

                formatResults();
                if (responseData.status == 'success') {
                    $.each(responseData.expenses, function(i, v) {
                        var value = responseData.expenses[i].value;
                        expenseFields(slug(responseData.expenses[i].title), responseData.expenses[i].title, value);
                    });
                    $.each(responseData.revenue, function(i, v) {
                        var value = responseData.revenue[i].value;
                        revenueFields(slug(responseData.revenue[i].title), responseData.revenue[i].title, value);
                    });
                    $.each(responseData.interest, function(i, v) {
                        var value = responseData.interest[i].value;
                        interestFields(slug(responseData.interest[i].title), responseData.interest[i].title, value);
                    });
                    formatInterest();
                    formatNumbers();
                }
            });

        }
        return false;
    });

    // Email results
    /*
    $("#emailSubmit").click(function(e) {

        e.preventDefault();

        var fields = [];
        var responseMsg = $('#email-response');
        var data = $('#calculator').serialize();
        data += '&email=' + escape($('#email').val());
    		data += '&cost=' + escape($('#cost').val());
    		data += '&units1=' + escape($('#units1').val());
    		data += '&units2=' + escape($('#units2').val());
    		data += '&pricePerFoot1=' + escape($('#pricePerFoot1').val());
    		data += '&pricePerFoot2=' + escape($('#pricePerFoot2').val());
    		data += '&projectedSF1=' + escape($('#projectedSF1').val());
    		data += '&projectedSF2=' + escape($('#projectedSF2').val());
    		data += '&salesPrice1=' + escape($('#salesPrice1').val());
    		data += '&salesPrice2=' + escape($('#salesPrice2').val());
    		data += '&buildCost1=' + escape($('#buildCost1').val());
    		data += '&buildCost2=' + escape($('#buildCost2').val());
    		data += '&contractorFee1=' + escape($('#contractorFee1').val());
    		data += '&contractorFee2=' + escape($('#contractorFee2').val());
    		data += '&closingCosts1=' + escape($('#closingCosts1').val());
    		data += '&closingCosts2=' + escape($('#closingCosts2').val());
    		data += '&incrementalCost1=' + escape($('#incrementalCost1').val());
    		data += '&incrementalCost2=' + escape($('#incrementalCost2').val());
    		data += '&loanAmount=' + escape($('#loanAmount').val());
    		data += '&downPercent=' + escape($('#downPercent').val());
    		data += '&downPayment=' + escape($('#downPayment').val());
    		data += '&iRate=' + escape($('#iRate').val());
    		data += '&exitPeriod=' + escape($('#exitPeriod').val());
        var i = 0;

        $('#expenses .result-row').each(function(index) {
          var fieldName = $(this).data('field');
          field = [];
          field[0] = $(this).find('.result-title').text();
          field[1] = ($(this).find('.result-value').text()).replace(/,/g, "");
          data += '&' + "rowE-" + i + '=' + encodeURI(JSON.stringify(field));
          i++;
        });

    		$('#revenue .result-row').each(function(index) {
          var fieldName = $(this).data('field');
          field = [];
          field[0] = $(this).find('.result-title').text();
          field[1] = ($(this).find('.result-value').text()).replace(/,/g, "");
          data += '&' + "rowR-" + i + '=' + encodeURI(JSON.stringify(field));
          i++;
        });


    		$('#interest-results .cl').each(function(index) {
          var fieldName = $(this).data('field');
          field = [];
          field[0] = $(this).find('.col-name').text();
    			$(this).find('.result-value').each(function(subindex) {
    		    field[1] = ($(this).text()).replace(/,/g, "");
    				data += '&' + "rowI-" + i + '=' + encodeURI(JSON.stringify(field));
    				i++;
      		});
          i++;
        });


        data += "&g-recaptcha-response=" + grecaptcha.getResponse();
        formData = data,
        formUrl = "/wp-content/themes/agenta/calculators/proforma/email-calc.php",
        formMethod = 'POST';

        // Show waiting message
        responseMsg.hide()
        responseMsg.addClass('response-waiting')
        responseMsg.text('Sending...')
        responseMsg.fadeIn(200);

        // Send data to server for validation
        $.ajax({
            url: formUrl,
            type: formMethod,
            data: formData,
            success: function(data) {
              var responseData = jQuery.parseJSON(data);
              // Show success message
              responseMsg.fadeOut(200, function() {
                $(this).removeClass('response-waiting')
                  .html(responseData.message)
                  .fadeIn(200, function() {
                      //set timeout to hide response message
                      setTimeout(function() {
                          responseMsg.fadeOut(200);
                      }, 5000);
                  });
              });
              if (responseData.status == 'success') {
                // On success
                setTimeout(function() {
                    $('#email').val("");
                }, 5000);
              } else if (responseData.status == 'error') {
                // On Error
              }
            }
        });
    });
    */

    $('.printCalc').off('click');
    $('.printCalc').on('click', function(e) {
        e.preventDefault();
        PrintCalculator();
        return false;
    });

})(jQuery);