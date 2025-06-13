// This is a mock implementation of the Story SDK integration
// In a real application, you would use the actual Story Protocol SDK

export interface IPRegistrationParams {
  title: string
  description: string
  ownerAddress: string
  contentHash: string
}

export async function registerIPWithStoryProtocol(params: IPRegistrationParams): Promise<string> {
  // Simulate API call to Story Protocol
  console.log("Registering IP with Story Protocol:", params)

  // In a real implementation, this would call the Story SDK to register the IP
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return a mock IP ID
  return "0x" + Math.random().toString(16).slice(2)
}

export async function fetchAvailableDatasets() {
  // Simulate API call to fetch available datasets
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return mock datasets
  return [
    {
      id: "1",
      title: "Blood Test Results - Diabetes Study",
      description:
        "Comprehensive blood test results from 100 patients with type 2 diabetes, including HbA1c, glucose levels, and lipid profiles.",
      dataType: "blood",
      owner: "0x1234567890abcdef1234567890abcdef12345678",
      uploadDate: new Date(2023, 5, 15).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 50,
      licenseCount: 3,
      licensed: false,
      totalRoyalties: 150,
    },
    {
      id: "2",
      title: "Genetic Data - Cardiovascular Risk Factors",
      description:
        "Anonymized genetic data focusing on cardiovascular risk factors from a diverse population of 500 individuals.",
      dataType: "dna",
      owner: "0x2345678901abcdef2345678901abcdef23456789",
      uploadDate: new Date(2023, 7, 22).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 120,
      licenseCount: 5,
      licensed: false,
      totalRoyalties: 600,
    },
    {
      id: "3",
      title: "MRI Brain Scans - Alzheimer's Research",
      description:
        "High-resolution MRI brain scans from 50 patients with early-stage Alzheimer's disease and 50 healthy controls.",
      dataType: "imaging",
      owner: "0x3456789012abcdef3456789012abcdef34567890",
      uploadDate: new Date(2023, 9, 10).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 200,
      licenseCount: 2,
      licensed: false,
      totalRoyalties: 400,
    },
    {
      id: "4",
      title: "Vital Signs Monitoring - Sleep Apnea Study",
      description:
        "Continuous vital signs monitoring data from 75 patients with sleep apnea, including heart rate, oxygen saturation, and respiratory rate.",
      dataType: "vitals",
      owner: "0x4567890123abcdef4567890123abcdef45678901",
      uploadDate: new Date(2023, 10, 5).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 80,
      licenseCount: 1,
      licensed: false,
      totalRoyalties: 80,
    },
    {
      id: "5",
      title: "Blood Samples - Autoimmune Disease Research",
      description:
        "Blood samples from 200 patients with various autoimmune diseases, including rheumatoid arthritis, lupus, and multiple sclerosis.",
      dataType: "blood",
      owner: "0x5678901234abcdef5678901234abcdef56789012",
      uploadDate: new Date(2023, 11, 18).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 100,
      licenseCount: 0,
      licensed: false,
      totalRoyalties: 0,
    },
    {
      id: "6",
      title: "DNA Sequencing - Cancer Predisposition",
      description:
        "Full genome sequencing data from 150 individuals with family history of various types of cancer, focusing on genetic predisposition markers.",
      dataType: "dna",
      owner: "0x6789012345abcdef6789012345abcdef67890123",
      uploadDate: new Date(2024, 0, 8).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 250,
      licenseCount: 4,
      licensed: false,
      totalRoyalties: 1000,
    },
  ]
}

export async function licenseDataset(datasetId: string, researcherAddress: string) {
  // Simulate API call to license a dataset
  console.log(`Licensing dataset ${datasetId} for researcher ${researcherAddress}`)

  // In a real implementation, this would call the Story SDK to create a license
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Return a mock license ID
  return "0x" + Math.random().toString(16).slice(2)
}

export async function fetchUserDatasets(userAddress: string) {
  // Simulate API call to fetch user datasets
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return mock datasets
  return [
    {
      id: "101",
      title: "My Blood Test Results - January 2023",
      description: "Complete blood panel including cholesterol, glucose, and hormone levels.",
      dataType: "blood",
      owner: userAddress,
      uploadDate: new Date(2023, 0, 15).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 50,
      licenseCount: 2,
      licensed: false,
      totalRoyalties: 100,
    },
    {
      id: "102",
      title: "My Genetic Data - Ancestry Analysis",
      description: "Full genetic profile with ancestry analysis and health risk factors.",
      dataType: "dna",
      owner: userAddress,
      uploadDate: new Date(2023, 3, 22).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 120,
      licenseCount: 3,
      licensed: false,
      totalRoyalties: 360,
    },
    {
      id: "103",
      title: "My Chest X-Ray - COVID Recovery",
      description: "Series of chest X-rays documenting recovery from COVID-19 pneumonia.",
      dataType: "imaging",
      owner: userAddress,
      uploadDate: new Date(2023, 6, 10).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 80,
      licenseCount: 1,
      licensed: false,
      totalRoyalties: 80,
    },
  ]
}

export async function fetchUserStats(userAddress: string) {
  // Simulate API call to fetch user stats
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Return mock stats
  return {
    totalUploads: 3,
    totalEarnings: 540,
    activeLicenses: 6,
    pendingRoyalties: 120,
    totalUsageCount: 15,
    dataInsights: 8,
    revenueHistory: [
      { date: "2023-01", amount: 0 },
      { date: "2023-02", amount: 50 },
      { date: "2023-03", amount: 50 },
      { date: "2023-04", amount: 100 },
      { date: "2023-05", amount: 100 },
      { date: "2023-06", amount: 150 },
      { date: "2023-07", amount: 200 },
      { date: "2023-08", amount: 250 },
      { date: "2023-09", amount: 300 },
      { date: "2023-10", amount: 350 },
      { date: "2023-11", amount: 450 },
      { date: "2023-12", amount: 540 },
    ],
  }
}

export async function fetchRecentActivity(userAddress: string) {
  // Simulate API call to fetch recent activity
  await new Promise((resolve) => setTimeout(resolve, 700))

  // Return mock activity
  return [
    {
      id: "act1",
      type: "upload",
      title: "Data Uploaded",
      description: "You uploaded 'My Blood Test Results - January 2023'",
      timestamp: new Date(2023, 0, 15).toISOString(),
    },
    {
      id: "act2",
      type: "license",
      title: "Data Licensed",
      description: "Your data 'My Blood Test Results' was licensed by Researcher 0x123...456",
      timestamp: new Date(2023, 1, 3).toISOString(),
    },
    {
      id: "act3",
      type: "royalty",
      title: "Royalty Payment",
      description: "You received 50 MEDI tokens as royalty payment",
      timestamp: new Date(2023, 1, 3).toISOString(),
    },
    {
      id: "act4",
      type: "upload",
      title: "Data Uploaded",
      description: "You uploaded 'My Genetic Data - Ancestry Analysis'",
      timestamp: new Date(2023, 3, 22).toISOString(),
    },
    {
      id: "act5",
      type: "license",
      title: "Data Licensed",
      description: "Your data 'My Genetic Data' was licensed by Researcher 0x789...012",
      timestamp: new Date(2023, 4, 10).toISOString(),
    },
    {
      id: "act6",
      type: "royalty",
      title: "Royalty Payment",
      description: "You received 120 MEDI tokens as royalty payment",
      timestamp: new Date(2023, 4, 10).toISOString(),
    },
    {
      id: "act7",
      type: "upload",
      title: "Data Uploaded",
      description: "You uploaded 'My Chest X-Ray - COVID Recovery'",
      timestamp: new Date(2023, 6, 10).toISOString(),
    },
    {
      id: "act8",
      type: "license",
      title: "Data Licensed",
      description: "Your data 'My Chest X-Ray' was licensed by Researcher 0x345...678",
      timestamp: new Date(2023, 7, 5).toISOString(),
    },
    {
      id: "act9",
      type: "royalty",
      title: "Royalty Payment",
      description: "You received 80 MEDI tokens as royalty payment",
      timestamp: new Date(2023, 7, 5).toISOString(),
    },
    {
      id: "act10",
      type: "license",
      title: "Data Licensed",
      description: "Your data 'My Genetic Data' was licensed by Researcher 0x901...234",
      timestamp: new Date(2023, 9, 18).toISOString(),
    },
    {
      id: "act11",
      type: "royalty",
      title: "Royalty Payment",
      description: "You received 120 MEDI tokens as royalty payment",
      timestamp: new Date(2023, 9, 18).toISOString(),
    },
    {
      id: "act12",
      type: "license",
      title: "Data Licensed",
      description: "Your data 'My Genetic Data' was licensed by Researcher 0x567...890",
      timestamp: new Date(2023, 11, 7).toISOString(),
    },
    {
      id: "act13",
      type: "royalty",
      title: "Royalty Payment",
      description: "You received 120 MEDI tokens as royalty payment",
      timestamp: new Date(2023, 11, 7).toISOString(),
    },
    {
      id: "act14",
      type: "license",
      title: "Data Licensed",
      description: "Your data 'My Blood Test Results' was licensed by Researcher 0x123...456",
      timestamp: new Date(2023, 11, 20).toISOString(),
    },
    {
      id: "act15",
      type: "royalty",
      title: "Royalty Payment",
      description: "You received 50 MEDI tokens as royalty payment",
      timestamp: new Date(2023, 11, 20).toISOString(),
    },
  ]
}

export async function fetchRecommendedDatasets(researcherAddress: string) {
  // Simulate API call to fetch recommended datasets
  await new Promise((resolve) => setTimeout(resolve, 1200))

  // Return mock recommended datasets
  return [
    {
      id: "201",
      title: "Genomic Data - Rare Disease Study",
      description:
        "Whole genome sequencing data from 50 patients with rare genetic disorders, focusing on novel mutations and disease mechanisms.",
      dataType: "dna",
      owner: "0x7890123456abcdef7890123456abcdef78901234",
      uploadDate: new Date(2023, 8, 5).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 180,
      licenseCount: 2,
      licensed: false,
      totalRoyalties: 360,
    },
    {
      id: "202",
      title: "Blood Biomarkers - Inflammatory Response",
      description:
        "Comprehensive blood biomarker data tracking inflammatory responses in 150 patients with various autoimmune conditions over 12 months.",
      dataType: "blood",
      owner: "0x8901234567abcdef8901234567abcdef89012345",
      uploadDate: new Date(2023, 7, 12).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 150,
      licenseCount: 4,
      licensed: false,
      totalRoyalties: 600,
    },
    {
      id: "203",
      title: "Neuroimaging Data - Depression Treatment Response",
      description:
        "Functional MRI and EEG data from 80 patients with major depressive disorder, tracking treatment response over 6 months.",
      dataType: "imaging",
      owner: "0x9012345678abcdef9012345678abcdef90123456",
      uploadDate: new Date(2023, 10, 28).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 220,
      licenseCount: 1,
      licensed: false,
      totalRoyalties: 220,
    },
  ]
}

export async function fetchResearcherStats(researcherAddress: string) {
  // Simulate API call to fetch researcher stats
  await new Promise((resolve) => setTimeout(resolve, 900))

  // Return mock stats
  return {
    totalLicensed: 8,
    totalSpent: 1240,
    activeLicenses: 5,
    pendingRequests: 2,
    datasetUsage: 12,
    researchPublications: 3,
    spendingHistory: [
      { date: "2023-01", amount: 0 },
      { date: "2023-02", amount: 0 },
      { date: "2023-03", amount: 200 },
      { date: "2023-04", amount: 200 },
      { date: "2023-05", amount: 350 },
      { date: "2023-06", amount: 350 },
      { date: "2023-07", amount: 550 },
      { date: "2023-08", amount: 550 },
      { date: "2023-09", amount: 750 },
      { date: "2023-10", amount: 900 },
      { date: "2023-11", amount: 1100 },
      { date: "2023-12", amount: 1240 },
    ],
  }
}

export async function fetchLicensedDatasets(researcherAddress: string) {
  // Simulate API call to fetch licensed datasets
  await new Promise((resolve) => setTimeout(resolve, 1100))

  // Return mock licensed datasets
  return [
    {
      id: "301",
      title: "Cardiac MRI Dataset - Heart Failure Progression",
      description:
        "Longitudinal cardiac MRI data from 60 patients with heart failure, tracking disease progression and treatment response.",
      dataType: "imaging",
      owner: "0x0123456789abcdef0123456789abcdef01234567",
      uploadDate: new Date(2023, 4, 18).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 180,
      licenseDate: new Date(2023, 5, 2).toISOString(),
      expiryDate: new Date(2024, 5, 2).toISOString(),
      status: "active",
    },
    {
      id: "302",
      title: "Genomic Markers - Cancer Treatment Response",
      description:
        "Genomic data focusing on treatment response markers from 120 cancer patients undergoing targeted therapies.",
      dataType: "dna",
      owner: "0x1234567890abcdef1234567890abcdef12345678",
      uploadDate: new Date(2023, 6, 10).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 250,
      licenseDate: new Date(2023, 7, 5).toISOString(),
      expiryDate: new Date(2024, 7, 5).toISOString(),
      status: "active",
    },
    {
      id: "303",
      title: "Blood Biomarkers - Diabetes Complications",
      description:
        "Comprehensive blood biomarker data from 90 patients with type 2 diabetes, focusing on markers for complication development.",
      dataType: "blood",
      owner: "0x2345678901abcdef2345678901abcdef23456789",
      uploadDate: new Date(2023, 8, 25).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 150,
      licenseDate: new Date(2023, 9, 12).toISOString(),
      expiryDate: new Date(2024, 9, 12).toISOString(),
      status: "active",
    },
  ]
}

export async function requestLicense(datasetId: string, researcherAddress: string, terms: any) {
  // Simulate API call to request a license
  console.log(`Requesting license for dataset ${datasetId} by researcher ${researcherAddress} with terms:`, terms)

  // In a real implementation, this would call the Story SDK to create a license request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Return a mock request ID
  return {
    requestId: "0x" + Math.random().toString(16).slice(2),
    status: "pending",
    timestamp: new Date().toISOString(),
  }
}

export async function fetchLicenseRequests(userAddress: string) {
  // Simulate API call to fetch license requests
  await new Promise((resolve) => setTimeout(resolve, 900))

  // Return mock license requests
  return [
    {
      id: "req1",
      datasetId: "101",
      datasetTitle: "My Blood Test Results - January 2023",
      requesterAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      requesterName: "Research Lab Alpha",
      requestDate: new Date(2023, 11, 28).toISOString(),
      proposedFee: 60,
      proposedDuration: 12, // months
      status: "pending",
      purpose: "Comparative analysis for diabetes research",
    },
    {
      id: "req2",
      datasetId: "102",
      datasetTitle: "My Genetic Data - Ancestry Analysis",
      requesterAddress: "0xbcdef1234567890abcdef1234567890abcdef123",
      requesterName: "Genomics Institute Beta",
      requestDate: new Date(2023, 11, 15).toISOString(),
      proposedFee: 130,
      proposedDuration: 24, // months
      status: "approved",
      purpose: "Population genetics study on hereditary disease factors",
    },
  ]
}
