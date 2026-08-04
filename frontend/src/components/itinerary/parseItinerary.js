/**
 * Converts AI JSON itinerary response into frontend structure
 */

export function parseItinerary(response) {

  if (!response) return [];

  try {

    let data = response;


    // If backend sends JSON string
    if (typeof response === "string") {

      data = JSON.parse(
          response
      );

    }


    if (!data.days) {
      return [];
    }


    return data.days.map(day => ({

      day: day.day,

      title: day.title || `Day ${day.day}`,

      subtitle: day.budgetToday || "",


      sections: day.sections.map(section => ({

        period: section.period,

        activities: section.activities.map(activity => ({

          title: activity.title,

          description: activity.description,

          location: activity.location,

          cost: activity.cost,

          transport: activity.transport

        }))

      }))

    }));


  } catch(error){

    console.error(
        "Itinerary parsing failed:",
        error
    );

    return [];

  }

}