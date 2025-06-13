// This is a mock implementation of API calls
// In a real application, these would connect to your backend or blockchain

import type { UserStats } from "@/types/user-stats"
import type { Activity } from "@/types/activity"
import type { Dataset } from "@/types/dataset"

export async function fetchUserStats(address: string): Promise<UserStats> {
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

export async function fetchRecentActivity(address: string): Promise<Activity[]> {
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
  ]
}

export async function fetchRecommendedDatasets(researcherAddress: string): Promise<Dataset[]> {
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
      uploadDate: new Date(2023, 9, 12).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 120,
      licenseCount: 4,
      licensed: false,
      totalRoyalties: 480,
    },
    {
      id: "203",
      title: "Brain MRI Collection - Neurological Disorders",
      description:
        "High-resolution MRI scans from 75 patients with various neurological disorders, including Alzheimer's, Parkinson's, and multiple sclerosis.",
      dataType: "imaging",
      owner: "0x9012345678abcdef9012345678abcdef90123456",
      uploadDate: new Date(2023, 10, 8).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 250,
      licenseCount: 1,
      licensed: false,
      totalRoyalties: 250,
    },
    {
      id: "204",
      title: "Cardiac Monitoring Data - Heart Failure Patients",
      description:
        "Continuous cardiac monitoring data from 40 heart failure patients, including ECG, blood pressure, and heart rate variability metrics.",
      dataType: "vitals",
      owner: "0xa123456789abcdefa123456789abcdefa1234567",
      uploadDate: new Date(2023, 11, 3).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 200,
      licenseCount: 0,
      licensed: false,
      totalRoyalties: 0,
    },
    {
      id: "205",
      title: "Diabetes Longitudinal Study - Glucose Monitoring",
      description:
        "Five-year longitudinal study data of continuous glucose monitoring from 100 type 2 diabetes patients with detailed lifestyle and medication information.",
      dataType: "blood",
      owner: "0xb234567890abcdefb234567890abcdefb2345678",
      uploadDate: new Date(2023, 11, 20).toISOString(),
      ipId: "0x" + Math.random().toString(16).slice(2),
      licenseFee: 300,
      licenseCount: 2,
      licensed: false,
      totalRoyalties: 600,
    },
  ]
}
