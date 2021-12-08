const ctx = document.getElementById("data-chart").getContext("2d");

let orange_gradient = ctx.createLinearGradient(0, 0, 0, 400);
orange_gradient.addColorStop(0, `rgba(225, 163, 117, 0.869)`);
orange_gradient.addColorStop(1, `rgba(232, 135, 197, 0.35)`);

const labels = [
    "1880",
    "1890",
    "1900",
    "1910",
    "1920",
    "1930",
    "1940",
    "1950",
    "1960",
    "1970",
    "1980",
    "1990",
    "2000",
    "2016"
];


const data = {
    labels: labels,
    datasets: [{
        fill: true,
        label: "Celsius Deviation From Baseline",
        backgroundColor: orange_gradient,
        borderColor: orange_gradient,
        data: [-0.2,-0.37, -0.42, -0.27, -0.15, 0.08, -0.18, -0.02, 0.02, 0.27, 0.44, 0.42, 0.71, 0.9363],
    }]
};

const config = {
    type: "line",
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: "Average Mean Temperature Deviations Since 1880",
                color: orange_gradient,
                font: {
                    size: 15,
                    weight: 600
                }
            },
            legend: {
                display: false,
                labels: {
                    color: `rgba(160, 224, 183, 0.75)`,
                    font: {
                        size: 15
                    }
                }
            },
        },
        scales: {
            y: {
                min: -0.6,
                max: 1.0,
                title: {
                    display: true,
                    text: "Mean (°C)",
                    color: orange_gradient,
                    font: {
                        size: 18
                    }
                },
                grid: {
                    borderWidth: 3,
                    color: [`rgba(160, 224, 183, 0.75)`, `rgba(160, 224, 183, 0.75)`, `rgba(160, 224, 183, 0.75)`, `rgba(175, 84, 255, 1)`, `rgba(160, 224, 183, 0.75)`, `rgba(160, 224, 183, 0.75)`, `rgba(160, 224, 183, 0.75)`, `rgba(160, 224, 183, 0.75)`, `rgba(160, 224, 183, 0.75)`]
                },
                ticks: {
                    color: `rgba(160, 224, 183, 0.75)`,
                    font: {
                        size: 14
                    }
                }
            },
            
            x: {
                title: {
                    display: true,
                    text: "Year",
                    color: orange_gradient,
                    font: {
                        size: 18
                    }
                },
                grid: {
                    color: `rgba(160, 224, 183, 0.75)`
                },
                ticks: {
                    color: `rgba(160, 224, 183, 0.75)`,
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
};

const climate_data_chart = new Chart(ctx, config);


let blueish_gradient = document.getElementById("co2-ppm-chart").getContext("2d").createLinearGradient(0, 0, 0, 400);
blueish_gradient.addColorStop(0, `rgba(58, 123, 213, 1)`);
blueish_gradient.addColorStop(1, `rgba(0, 210,  255, 0.4)`);

const config_ppm = {
    type: "line",
    data: {
        labels: ["800,000", "400,000", "200,000", "100,000", "50,000", "25,000", "5,000", "2,500", "1,000", "900", "800", "700", "600", "500", "400", "300", "200", "100", "50", "25", "0"],
        datasets: [{
            label: "carbon dioxide level (parts per million)",
            fill: true,
            backgroundColor: blueish_gradient,
            borderColor: blueish_gradient,
            data: [188, 283, 239, 226, 210, 192, 269, 278, 279.7, 283.2, 282.8, 283.3, 280.7, 283.1, 275.3, 277, 284.2, 303.4, 327.44, 364.35, 415.52]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Global C02 Levels",
                color: blueish_gradient,
                font: {
                    size: 15,
                    weight: 600
                }
            },
            legend: {
                display: false,
                labels: {
                    color: `rgba(160, 224, 183, 0.75)`,
                    font: {
                        size: 15
                    }
                }
            },
        },
        scales: {
            y: {
                min: 160,
                max: 440,
                title: {
                    display: true,
                    text: "CO2 (parts per million)",
                    color: blueish_gradient,
                    font: {
                        size: 18
                    }
                },
                grid: {
                    borderWidth: 3,
                    color: `rgba(160, 224, 183, 0.75)`
                },
                ticks: {
                    color: `rgba(160, 224, 183, 0.75)`,
                    font: {
                        size: 14
                    }
                }
            },
            
            x: {
                title: {
                    display: true,
                    text: "years before today (0 = 2021)",
                    color: blueish_gradient,
                    font: {
                        size: 18
                    }
                },
                grid: {
                    color: `rgba(160, 224, 183, 0.75)`
                },
                ticks: {
                    color: `rgba(160, 224, 183, 0.75)`,
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
}

const co2_ppm_data_chart = new Chart(
    document.getElementById("co2-ppm-chart").getContext("2d"),
    config_ppm
);