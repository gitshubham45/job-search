const filterJobs = (
    jobData, // Array of job objects
    debounceQuery, // Search query
    selectedRoles = [], // Array of selected roles
    selectedBasePay = null, // Base pay filter
    selectedEmployeeRange = null, // Employee range filter
    selectedMinExp = null, // Minimum experience filter
    selectedTechStack = [], // Array of selected tech stacks
    selectedWorkPreference = null // Work preference filter
  ) => {
    return jobData.filter((job) => {
      // Condition for search query
      const matchesSearchQuery = debounceQuery?.trim()
        ? job?.jobRole?.toLowerCase().includes(debounceQuery.toLowerCase()) ||
          job?.description?.toLowerCase().includes(debounceQuery.toLowerCase()) ||
          job?.companyName?.toLowerCase().includes(debounceQuery.toLowerCase()) ||
          job?.location?.toLowerCase().includes(debounceQuery.toLowerCase())
        : true;
  
      // Condition for selected roles
      const matchesSelectedRoles = selectedRoles.length > 0
        ? selectedRoles.some(
            (role) => job?.jobRole?.toLowerCase() === role?.value?.toLowerCase()
          )
        : true;
  
      // Condition for base pay
      const matchesBasePay = selectedBasePay
        ? job?.basePay >= selectedBasePay
        : true;
  
      // Condition for employee range
      const matchesEmployeeRange = selectedEmployeeRange
        ? job?.employeeRange === selectedEmployeeRange
        : true;
  
      // Condition for minimum experience
      const matchesMinExp = selectedMinExp
        ? job?.experience >= selectedMinExp
        : true;
  
      // Condition for tech stack
      const matchesTechStack = selectedTechStack.length > 0
        ? selectedTechStack.some(
            (tech) =>
              job?.techStack?.toLowerCase().includes(tech.toLowerCase())
          )
        : true;
  
      // Condition for work preference (e.g., remote, onsite, hybrid)
      const matchesWorkPreference = selectedWorkPreference
        ? job?.workPreference === selectedWorkPreference
        : true;
  
      // Return true only if all conditions are met
      return (
        matchesSearchQuery &&
        matchesSelectedRoles &&
        matchesBasePay &&
        matchesEmployeeRange &&
        matchesMinExp &&
        matchesTechStack &&
        matchesWorkPreference
      );
    });
  };
  
  export default filterJobs;
  