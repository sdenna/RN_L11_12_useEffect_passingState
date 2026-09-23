import React, { useState, useEffect } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";

// Define the type for the data we expect to fetch
interface User {
  id: number;
  name: string;
  company: {
    name: string;
  };
}

export default function Index() {
  // State to hold the fetched data
  const [user, setUser] = useState<User | null>(null);
  // State to track loading state
  const [loading, setLoading] = useState<boolean>(true);
  // State for error handling
  const [error, setError] = useState<string | null>(null);
  // State to track the user ID for the URL
  const [userId, setUserId] = useState<number>(1); // Start with user 1

  // useEffect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // This makes the link update each time the userId updates
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        const data: User = await response.json(); // Type assertion for the fetched data
        setUser(data);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]); // Dependency array now depends on `userId`

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View>
          <Text>User ID: {user?.id}</Text>
          <Text>User Name: {user?.name}</Text>
          <Text>User Company: {user?.company.name}</Text>
        </View>
      )}
      <Button title="Reload" onPress={() => setUserId((prev) => prev + 1)} />
    </View>
  );
}
