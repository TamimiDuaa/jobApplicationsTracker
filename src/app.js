const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: '# of applications',
      data: [2, 19, 4, 3, 2, 10],
      backgroundColor: [ // Custom background colors for the bars
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [ // Custom border colors for the bars
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
      borderWidth: 0.2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});