function loadSFE() {
    urlP('E');
    fetch('../financeiro/sf/receitas/index.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => console.error('Erro ao content entrada.html:', error));
    setTimeout(function () {
        pageConfig();
        grSFCategoria("E")
        // preencherTotais();
        // preencherTabelaSF();
        // preencherTabelaSFME();

    }, 1000);
}

function loadSFS() {
    urlP('S');
    fetch('../financeiro/sf/despesas/index.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => console.error('Erro ao content saida.html:', error));

    setTimeout(function () {
        pageConfig();
        grSFCategoria("S")
        // preencherTotais();
        // preencherTabelaSF();
        // preencherTabelaSFME();
    }, 1000);
}

function loadSPR() {
    urlP('C');
    fetch('../financeiro/sf/contas/index.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => console.error('Erro ao content contas.html:', error));

    setTimeout(function () {
        pageConfig();
        grSFContas();
        // preencherTotais();
        // preencherTabelaSF();
        // preencherTabelaSFME();
    }, 1000);
}

 function loadFL() {
     urlP('F');
      fetch('../financeiro/fl/index.html')
          .then(response => response.text())
          .then(html => {
              document.getElementById('main-content').innerHTML = html;
          })
          .catch(error => console.error('Erro ao content fluxo.html:', error));

      setTimeout(function() {
        pageConfig();
        grFluxoAnual();
        //obtemFluxo();
        //obtemContaPR();
        //generateChart();
      }, 1000);
 }

 function loadPL() {
    urlP('P');
    fetch('../financeiro/pl/index.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => console.error('Erro ao content planejamento.html:', error));
    setTimeout(function () {
        grPLanual();
        grPLMensal();
        grPLrangeAnual();
        grPLrangeAnual2();
    }, 1000);
}

function urlP(p) {
    let urlAtual = window.location.href;
    let novoParametro = 't=' + p;
    if (urlAtual.indexOf('?') === -1) {
        window.history.pushState({}, '', urlAtual + '?' + novoParametro);
    } else {
        if (urlAtual.indexOf('t=') === -1) {
            window.history.pushState({}, '', urlAtual + '&' + novoParametro);
        } else {
            window.history.pushState({}, '', urlAtual.replace(/t=(S|E|F|P|C|P)/, novoParametro));
        }
    }
}

function pageConfig() {
    var parametroT = new URLSearchParams(window.location.search).get('t');

    if (parametroT === 'E') {

    } else if (parametroT === 'S') {

    } else if (parametroT === 'P') {

    } else if (parametroT === 'F') {

    } else if (parametroT === 'C') {

    }
}

function grFluxoAnual() {
    var ctx = document.getElementById("lineChart");
    ctx.height = 100;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
                {
                    label: "Receitas",
                    borderColor: "#00c292",
                    borderWidth: "1",
                    //backgroundColor: "#00c29250",
                    data: [10, 11, 9, 43, 65, 16, 29, 0, 0, 0, 0, 0]
                },
                {
                    label: "Despesas",
                    borderColor: "#dc3545",
                    borderWidth: "1",
                    //backgroundColor: "#dc354550",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [16, 32, 18, 27, 42, 33, 44, 0, 0, 0, 0, 0]
                }
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    });

}

function grSFCategoria(tipo) {

    if (tipo === "E") {
        var color = "#00c292";
        var desc = "Receitas Totais"
    } else {
        color = "#dc3545"
        desc = "Despesas"
    }
    var ctx = document.getElementById("barChart");
    ctx.height = 110;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
                {
                    label: desc,
                    data: [65, 59, 80, 81, 56, 55, 45, 89, 10, 99, 11, 100],
                    borderColor: "color",
                    borderWidth: "0",
                    backgroundColor: color
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function grSFContas() {


    var colorR = "#00c292";
    var descR = "Receber Total"

    var colorP = "#dc3545"
    var descP = "Pagar Total"

    var ctx = document.getElementById("grContas");
    ctx.height = 110;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
                
                {
                    label: descP,
                    data: [65, 59, 80, 81, 56, 55, 45, 89, 10, 99, 11, 100],
                    borderColor: "color",
                    borderWidth: "0",
                    backgroundColor: colorP
                },{
                    label: descR,
                    data: [65, 59, 80, 81, 56, 55, 45, 89, 10, 99, 11, 100],
                    borderColor: "color",
                    borderWidth: "0",
                    backgroundColor: colorR
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function grPLanual() {
    var colorG = "#eea303"; 

    var totalPlanejado = 100; 
    var porcentagemAlcancada = 65; 

    var ctx = document.getElementById("grPLanual");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Realizado", "Restante"],
            datasets: [{
                data: [porcentagemAlcancada, totalPlanejado - porcentagemAlcancada],
                backgroundColor: [colorG, "#1b68ff"],
                hoverBackgroundColor: [colorG, "#1b68ff"],
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 80,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            tooltips: { enabled: true },
            legend: { display: false },
            title: { display: true },
            plugins: {
                datalabels: {
                    color: 'black',
                    font: {
                        size: 14
                    },
                    formatter: (value) => {
                        return value + '%';
                    },
                    anchor: 'end',
                    align: 'end'
                }
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            }
        }
    });
}

function grPLMensal() {
    var colorG = "#eea303"; 

    var totalPlanejado = 100; 
    var porcentagemAlcancada = 10; 

    var ctx = document.getElementById("grPLmensal");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Realizado", "Restante"],
            datasets: [{
                data: [porcentagemAlcancada, totalPlanejado - porcentagemAlcancada],
                backgroundColor: [colorG, "#1b68ff"],
                hoverBackgroundColor: [colorG, "#1b68ff"],
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 80,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            tooltips: { enabled: true },
            legend: { display: false },
            title: { display: true },
            plugins: {
                datalabels: {
                    color: 'black',
                    font: {
                        size: 14
                    },
                    formatter: (value) => {
                        return value + '%';
                    },
                    anchor: 'end',
                    align: 'end'
                }
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            }
        }
    });
}

function grPLrangeAnual() {
    var ctx = document.getElementById("grPLrangeAnual");
    ctx.height = 120;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
                {
                    label: "Meta",
                    borderColor: "#eea303",
                    borderWidth: "1",
                    //backgroundColor: "#00c29250",
                    data: [10, 11, 9, 43, 65, 16, 29, 0, 0, 0, 0, 0]
                },
                {
                    label: "Realizado",
                    borderColor: "#1b68ff",
                    borderWidth: "1",
                    //backgroundColor: "#dc354550",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [16, 32, 18, 27, 42, 33, 44, 0, 0, 0, 0, 0]
                }
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    });

}

function grPLrangeAnual2() {
    var ctx = document.getElementById("grPLrangeAnual2");
    ctx.height = 120;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
                {
                    label: "Meta",
                    borderColor: "#eea303",
                    borderWidth: "1",
                    //backgroundColor: "#00c29250",
                    data: [10, 11, 9, 43, 65, 16, 29, 50, 30, 18, 0, 0]
                },
                {
                    label: "Realizado",
                    borderColor: "#1b68ff",
                    borderWidth: "1",
                    //backgroundColor: "#dc354550",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [16, 32, 18, 27, 42, 33, 44,11,45,67,10, 0]
                }
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    });

}
