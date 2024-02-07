import axios from 'axios'




const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '5b562985-21c8-4837-8dd0-08325941d4e3',
  },
})

type ResponseType<T = {}> = {
  resultCode: number
  messages: string[]
  data: T
}

export type GetUsersResponse = {
  error: null | string
  totalCount: number
  items: UserType[]
}

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance
      .get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}`)

  },
  unfollow(userID: string) {
    return instance.delete<ResponseType>(`follow/${userID}`).then((response) => response.data)
  },
  follow(userID: string) {
    return instance.post<ResponseType>(`follow/${userID}`).then((response) => response.data)
  },
}

export const profileAPI = {
  getProfile(userID: string) {
    return instance.get<ProfileType>(`profile/${userID}`).then((response) => response.data)
  },
  getStatus(userID: string) {
    return instance.get<string>(`profile/status/${userID}`)
  },
  updateStatus(status: string) {
    return instance.put<ResponseType>(`profile/statusd`, { status })
  },
  savePhoto(photoFile: File) {
    const formData = new FormData()
    formData.append('image', photoFile)

    return instance.put<ResponseType<{ photos: Photos }>>(`profile/photo`, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
  },
  saveProfile(profileForm: FormData) {
    return instance.put(`profile`, profileForm)
  },
}

export const authAPI = {
  me() {
    return instance.get<ResponseType<AuthStateType>>(`auth/me`).then((response) => response.data)
  },
  login(params: FormDataType) {
    return instance.post<ResponseType<{ userId: string }>>(`auth/login`, params).then((response) => response.data)
  },
  logout() {
    return instance.delete<ResponseType>(`auth/login`).then((response) => response.data)
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<{ url: string }>(`security/get-captcha-url`).then((res) => {
      return res.data
    })
  },
}


export type UserType = {
  followed: boolean
  id: number
  name: string
  photos: {
    small: null | string
    large: null | string
  }
  status: null
  uniqueUrlName: null
}

export type Photos = {
  small: string
  large: string
}

export type ProfileType = null | {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: Photos
  aboutMe: string
}

export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type AuthStateType = {
  id: string | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl?: string | null // if null, then captcha is not required
}
export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
}
