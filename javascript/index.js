// Load the Visualization API and the piechart package.
google.charts.load('current', {
    'packages': ['corechart', 'map'],
    'mapsApiKey': 'AIzaSyBO-Xi8Qjp3mS5YDOmiqwnb8UIVwPJNh9Y'
});

window.onload = function() {
    // Set the callbacks to run when the Google Visualization API is loaded.
    
    google.charts.setOnLoadCallback(draw({
        sheetID: '1662540604',
        selector: '#office',
        type: 'pie',
        settings: {
            title: 'Kontorblokk'
        }
    }));
    google.charts.setOnLoadCallback(draw({
        sheetID: '1384325223',
        selector: '#profile',
        type: 'pie',
        settings: {
            title: 'Hovedprofil'
        }
    }));
    
    google.charts.setOnLoadCallback(draw({
        sheetID: '1023917008',
        selector: '#gender',
        type: 'pie',
        settings: {
            title: 'Kjønn',
            colors: ['blue','magenta']
        }
    }));
    
    google.charts.setOnLoadCallback(draw({
        sheetID: '2081815778',
        selector: '#signed',
        type: 'column',
        settings: {
            title: 'Signeringer',
            chartArea: {
                left: 50,
                right: 20
            }
        }
    }));

    google.charts.setOnLoadCallback(draw({
        sheetID: '143398132',
        selector: '#startgender',
        type: 'column',
        settings: {
            title: 'Når vi starter dagen fordelt på kjønn',
            chartArea: {
                left: 50,
                right: 20
            }
        }
    }));

    

    google.charts.setOnLoadCallback(draw({
        sheetID: '755892110',
        selector: '#soskensnitt',
        type: 'line',
        settings: {
            title: 'Karaktersnitt ut ifra om man er eldst, yngst eller mellom i søskenflokken',
            chartArea: {
                left: 50,
                right: 20
            }
        }
    }));

    
    google.charts.setOnLoadCallback(draw({
        sheetID: '1295165639',
        selector: '#total',
        type: 'column',
        settings: {
            title: 'Totalt antall med jobb',
            chartArea: {
                left: 50,
                right: 20
            },
            trendlines: {0: {
                type: 'exponential'
            }},
            vAxis: {maxValue: 80}
        }
    }));
    
    google.charts.setOnLoadCallback(draw({
        sheetID: '1719168011',
        selector: '#shoes',
        type: 'column',
        settings: {
            title: 'Skostørrelse',
            colors: ['#DC8473'],
            chartArea: {
                left: 50,
                right: 20
            }
        }
    }));
    
    google.charts.setOnLoadCallback(draw({
        sheetID: '55814699',
        selector: '#bloodtype',
        type: 'pie',
        settings: {
            title: 'Blodtype'
        }
    }));
    
    google.charts.setOnLoadCallback(draw({
        sheetID: '2081815778',
        selector: '#jobs',
        type: 'pie',
        settings: {
            title: 'Andel med jobb av de som har svart'
        }
    }));

	google.charts.setOnLoadCallback(draw({
        sheetID: '1608901855',
        selector: '#answers',
        type: 'pie',
        settings: {
            title: 'Andel som har svart, av maksimum forventede svar',
            colors: ['black','grey']
        }
    }));
    

    google.charts.setOnLoadCallback(draw({
        sheetID: '1802206864',
        selector: '#profile-percentage',
        type: 'column',
        settings: {
            title: 'Andel av hver spesialisering som har jobb (andel av de som har svart på skjemaet)',
            chartArea: {
                left: 50,
                right: 20
            },
            vAxis: {title: 'Prosent', titleTextStyle: {italic: false}, maxValue: 100, minValue: 0}
        }
    }));

    google.charts.setOnLoadCallback(draw({
        sheetID: '1978833198',
        selector: '#industry',
        type: 'pie',
        settings: {
            title: 'Bransjer'
        }
    }));

     google.charts.setOnLoadCallback(draw({
     	sheetID: '137775932',
     	selector: '#map',
     	type: 'map',
     	settings: {
     		title: 'Hvor i landet folk har fått jobb',
     		region: 'NO',
        	displayMode: 'markers',
        	colorAxis: {colors: ['green', 'blue']}
     	}
  	}));

    google.charts.setOnLoadCallback(draw({
     	sheetID: '418070906',
     	selector: '#oljejob',
     	type: 'line',
     	settings: {
     		title: 'Oljepris og jobbsigneringer'
     	}
  	}));

  	google.charts.setOnLoadCallback(draw({
     	sheetID: '661648749',
     	selector: '#handjob',
     	type: 'column',
     	settings: {
     		title: 'Andel av de høyre- og venstrehendte som har fått jobb',
     		vAxis: {title: 'Prosent', minValue: 0, maxValue: 100},
     		chartArea: {left: 50, right: 50}
     	}
  	}));

//Vetle test
    google.charts.setOnLoadCallback(draw({
        sheetID: '94341489',
        selector: '#lonn',
        type: 'column',
        settings: {
            title: 'Lønn',
            vAxis: {title: 'Antall', minValue: 0, maxValue: 30},
            chartArea: {left: 50, right: 50}
        }
    }));


     

	google.charts.setOnLoadCallback(draw({
     	sheetID: '139832340',
     	selector: '#shoeheight',
     	type: 'bubble',
     	settings: {
     		title: 'Skostørrelse vs høyde',
     		colorAxis: {colors: ['yellow', 'red']},
     		vAxis: {title: 'Høyde i cm', minValue: 150, maxValue: 200 },
     		hAxis: {title: 'Skostr.', minValue: 34, maxValue: 50},
     		chartArea: {
                left: 50,
                right: 50
            }
     	}
  	}));
	    
};

/**
 * Helper function to create the correct chart object
 *
 * @param {object} options Option object for the chart being created.
 * @return {object} A Google chart object.
 */
function makeChart(options) {
    var element = document.querySelector(options.selector);
    switch (options.type) {
        case 'pie':
            return new google.visualization.PieChart(element);
        case 'bar':
            return new google.visualization.BarChart(element);
        case 'column':
            return new google.visualization.ColumnChart(element);
        case 'scatter':
            return new google.visualization.ScatterChart(element);
        case 'bubble':
            return new google.visualization.BubbleChart(element);
        case 'histogram':
            return new google.visualization.Histogram(element);
        case 'line':
            return new google.visualization.LineChart(element);
        case 'map':
            return new google.visualization.GeoChart(element);
        default:
            throw 'Error in makeChart(): No match for chart type';
    }
}

/**
 * Helper function to handle the google charts response
 *
 * @param {object} response The Google charts response object.
 * @param {object} options Option object for the chart being created.
 */
function handleResponse(response, options) {
    if (response.isError()) {
        console.error('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var data = response.getDataTable();

    var chart = makeChart(options);
    chart.draw(data, options.hasOwnProperty('settings') ? options.settings : {});
}

/**
 * Draw a chart with the options specified, fetching data from a google sheet
 *
 * @param {object} options Option object for the chart being created.
 */
function draw(options) {
    var url = "https://docs.google.com/spreadsheets/d/1jmosQuhjZKUn9204-7USMGtEfTJ4XfsUxYEn_5QB3fU/gviz/tq";
    var settings = "?gid=" + options.sheetID;

    // Add default settings for chart size, unless overridden
    if (!options.settings.hasOwnProperty('chartArea')) {
        options.settings.chartArea = {
            left: 40,
            width: '100%'
        };
    }

    var query = new google.visualization.Query(url + settings);
    query.send(function(r) {
        handleResponse(r, options);
    });
}