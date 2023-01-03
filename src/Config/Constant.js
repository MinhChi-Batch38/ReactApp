
const GENRE = ["Pop", "Rock", "EDM", "Ballad", "Tropical house"]
const REGEXP = /[^0-9a-zA-Z ,-]/

const PRASES = {
    Yes: {
        en: 'Yes',
        vn: 'Có'
    },
    No: {
        en: 'No',
        vn: 'Không'
    },
    Language: {
        en: 'Language',
        vn: 'Ngôn ngữ'
    },
    Search: {
        en: 'Search',
        vn: 'Tìm kiếm'
    },
    Name: {
        en: 'Name',
        vn: 'Tên'
    },
    Genre: {
        en: 'Genre',
        vn: 'Thể loại'
    },
    Action: {
        en: 'Action',
        vn: 'Thao tác'
    },
    Song: {
        en: 'Song',
        vn: 'Bài hát'
    },
    Singer: {
        en: 'Singer',
        vn: 'Ca sĩ'
    },
    Add: {
        en: 'Add',
        vn: 'Thêm'
    },
    Save: {
        en: 'Save',
        vn: 'Lưu'
    },
    Cancel: {
        en: 'Cancel',
        vn: 'Hủy'
    },
    Upload: {
        en: 'Upload Song',
        vn: 'Tải nhạc lên'
    },
    Total: {
        en: 'Total Items',
        vn: 'Tổng'
    },
    Select: {
        en: 'Selected Items',
        vn: 'Đã chọn'
    },
    PageSize: {
        en: 'Page Size',
        vn: 'Kích thước trang'
    },
}

const MESSAGE = {
    Add_201: {
        en: 'The song has been added!',
        vn: 'Thêm bài hát thành công!'
    },
    Add_404: {
        en: 'Add failed!',
        vn: 'Thêm bài hát thất bại!'
    },
    check_404: {
        en: 'The song has already been existed!',
        vn: 'Bài hát đã tồn tại!'
    },
    check_500: {
        en: "Can't check song! Please try again!",
        vn: 'Đã xảy ra lỗi! Vui lòng thử lại sau!'
    },
    edit_404: {
        en: 'Edit failed!',
        vn: 'Chỉnh sửa thất bại!'
    },
    edit_200: {
        en: "The song has been updated!",
        vn: 'Bài hát đã được cập nhật!'
    },
    delete_500: {
        en: "Delete failed!",
        vn: 'Xóa thất bại!'
    },
    delete_200: {
        en: "The songs have been deleted!",
        vn: 'Bài hát đã được xóa!'
    },
    
}

const TITLE = {
    Delete: {
        en: 'Delete Songs',
        vn: 'Xóa bài hát'
    },
    Add: {
        en: 'Add new song',
        vn: 'Thêm bài hát mới'
    },
    AddInfo: {
        en: "To add new song, please enter all the song's information",
        vn: 'Để thêm bài hát, vui lòng nhập tất cả thông tin của bài hát'
    },
    DeleteInfo: {
        en: "Are you sure to delete all the songs are selected?",
        vn: 'Bạn có muốn xóa tất cả bài hát được chọn?'
    },
}

const LANGUAGE = {
    en: {
        Yes: PRASES.Yes.en,
        No: PRASES.No.en,
        Language: PRASES.Language.en,
        Search: PRASES.Language.en,
        Name: PRASES.Name.en,
        Genre: PRASES.Genre.en,
        Action: PRASES.Action.en,
        Song: PRASES.Song.en,
        Singer: PRASES.Singer.en,
        Add: PRASES.Add.en,
        Save: PRASES.Save.en,
        Cancel: PRASES.Cancel.en,
        Upload: PRASES.Upload.en,
        Total: PRASES.Total.en,
        Select: PRASES.Select.en,
        PageSize: PRASES.PageSize.en,
        Title: {
            Delete: TITLE.Delete.en,
            Add: TITLE.Add.en,
            AddInfo: TITLE.AddInfo.en,
            DeleteInfo: TITLE.DeleteInfo.en,
        }, 
        Message: {
            Add_201: MESSAGE.Add_201.en,
            Add_404: MESSAGE.Add_404.en,
            check_404: MESSAGE.check_404.en,
            check_500: MESSAGE.check_500.en,
            edit_404: MESSAGE.edit_404.en,
            edit_200: MESSAGE.edit_200.en,
            delete_500: MESSAGE.delete_500.en,
            delete_200: MESSAGE.delete_200.en,
        }

    },
    vn: {
        Yes: PRASES.Yes.vn,
        No: PRASES.No.vn,
        Language: PRASES.Language.vn,
        Search: PRASES.Language.vn,
        Name: PRASES.Name.vn,
        Genre: PRASES.Genre.vn,
        Action: PRASES.Action.vn,
        Song: PRASES.Song.vn,
        Singer: PRASES.Singer.vn,
        Add: PRASES.Add.vn,
        Save: PRASES.Save.vn,
        Cancel: PRASES.Cancel.vn,
        Upload: PRASES.Upload.vn,
        Total: PRASES.Total.vn,
        Select: PRASES.Select.vn,
        PageSize: PRASES.PageSize.vn,
        Title: {
            Delete: TITLE.Delete.vn,
            Add: TITLE.Add.vn,
            AddInfo: TITLE.AddInfo.vn,
            DeleteInfo: TITLE.DeleteInfo.vn,
        }, 
        Message: {
            Add_201: MESSAGE.Add_201.vn,
            Add_404: MESSAGE.Add_404.vn,
            Check_404: MESSAGE.check_404.vn,
            Check_500: MESSAGE.check_500.vn,
            Edit_404: MESSAGE.edit_404.vn,
            Edit_200: MESSAGE.edit_200.vn,
            Delete_500: MESSAGE.delete_500.vn,
            Delete_200: MESSAGE.delete_200.vn,
        }
    },
}

export {
    GENRE,
    REGEXP,
    LANGUAGE
}