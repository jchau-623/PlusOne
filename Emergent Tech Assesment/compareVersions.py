# Custom version format:
# Software versions are stored as strings which has 5 parts stored as a the format [major.[minor].[patch].[build].[compilation]. Each version part will always be non-negative integers. You may see versions like "2","1.5", or "2.12.4.0.6". The period is only used as a separator and does not represent a decimal point (i.e. 1.5 does not mean one and a half.)
# Algorithm details:
# Your algorithm should have two string input parameters: version1 and version2. It should return -1 when version1 is less than version2, 0 when version1=version2, and 1 when version1 is greater than version2. All inputs can be treated as valid and the maximum version part will be less than 100.

# Examples:
# Here are some examples showing how similar versions compare:
# "2" == "2.0" == "2.0.0" == "2.0.0.0" = "2.0.0.0.0" (returns 0 in each case)
# "2" < "2.0.0.0.1" returns -1
# "2" < "2.1" Returns -1
# "2.1.0" > "2.0.1" returns1
# "2.10.0.1" > "2.1.0.10" returns 1
# "2.0.1" > "1.2000.1" returns 1

# To implement this algorithm, you can follow these steps:

# Split the version strings by the period "." to extract individual version parts.
# Compare the corresponding parts of both versions.
# If at any point one version has a higher part than the other, return the appropriate comparison result (-1, 0, or 1).
# If all parts are equal until the end of either version string is reached, consider the longer version to be greater.

def compare_versions(version1, version2):
    # Split the version strings into parts
    parts1 = list(map(int, version1.split('.')))
    parts2 = list(map(int, version2.split('.')))

    # Ensure both versions have the same length by padding with zeros
    max_length = max(len(parts1), len(parts2))
    parts1 += [0] * (max_length - len(parts1))
    parts2 += [0] * (max_length - len(parts2))


    # Compare each part
    for p1, p2 in zip(parts1, parts2):
        if p1 < p2:
            return -1
        elif p1 > p2:
            return 1

    # If all parts are equal, compare the lengths
    if len(parts1) < len(parts2):
        return -1
    elif len(parts1) > len(parts2):
        return 1
    else:
        return 0

# Test cases
print(compare_versions("2", "2.0.0.0.1"))  # Output: -1
print(compare_versions("2", "2.1"))        # Output: -1
print(compare_versions("2.1.0", "2.0.1"))  # Output: 1
print(compare_versions("2.10.0.1", "2.1.0.10"))  # Output: 1
print(compare_versions("2.0.1", "1.2000.1"))     # Output: 1
