type Activity = {
  id: string
  name: string
}

export class ActivityDB {
  private data: Activity[] = []

  private static instance: ActivityDB

  public static getInstance(): ActivityDB {
    if (!ActivityDB.instance) {
      ActivityDB.instance = new ActivityDB()
    }
    return ActivityDB.instance
  }

  create(activity: Activity) {
    this.data.push(activity)
  }

  getAll() {
    return this.data
  }

  get(id: string) {
    return this.data.find((activity) => activity.id === id)
  }

  update(id: string, updatedActivity: Partial<Activity>) {
    const activity = this.data.find((activity) => activity.id === id)
    if (activity) {
      Object.assign(activity, updatedActivity)
    }
  }

  delete(id: string) {
    const index = this.data.findIndex((activity) => activity.id === id)
    if (index !== -1) {
      this.data.splice(index, 1)
    }
  }
}
