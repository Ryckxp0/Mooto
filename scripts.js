function showServiceDetail(serviceId) {
    // Esconde todas as seções de serviço
    const serviceDetails = document.querySelectorAll('.service-detail');
    serviceDetails.forEach(detail => {
        detail.style.display = 'none';
    });

    // Exibe a seção específica
    const serviceDetail = document.getElementById(serviceId);
    if (serviceDetail) {
        serviceDetail.style.display = 'block';
    }
}
